import { AWARD_MAP, detectAwards, hasAward } from "./awards";
import {
  CARDS_PER_TERM,
  COLLAPSE_COPY,
  ERAS,
  MAX_DISASTERS,
  MAX_TERMS_DEFAULT,
  YEARS_PER_TERM,
  newRun,
} from "./constants";
import { EVENT_MAP, EVENTS } from "./events";
import { clamp, flashFromDelta, rankOf, shopPrice } from "./format";
import { availableShop, SHOP } from "./shop";
import type { Choice, CollapseReason, Effects, EraId, GameEvent, GameState, StatKey } from "./types";
import { STAT_KEYS } from "./types";

function addFlags(list: string[], extra?: string[]) {
  if (!extra?.length) return list;
  const set = new Set(list);
  for (const f of extra) set.add(f);
  return [...set];
}

function dropFlags(list: string[], extra?: string[]) {
  if (!extra?.length) return list;
  const drop = new Set(extra);
  return list.filter((f) => !drop.has(f));
}

export function applyEffects(
  state: GameState,
  effects: Effects,
): { stats: GameState["stats"]; money: number; influence: number; flash: GameState["lastFlash"] } {
  const stats = { ...state.stats };
  const flash: GameState["lastFlash"] = {};
  for (const key of STAT_KEYS) {
    const delta = effects[key];
    if (!delta) continue;
    const before = stats[key];
    let next = clamp(before + delta);
    if (key === "image") next = Math.min(next, state.imageCap);
    stats[key] = next;
    const f = flashFromDelta(before, next);
    if (f) flash[key] = f;
  }
  return {
    stats,
    money: Math.max(0, Math.round(state.money + (effects.money ?? 0))),
    influence: clamp(state.influence + (effects.influence ?? 0), 0, 100),
    flash,
  };
}

function tickInflation(stats: GameState["stats"]): GameState["stats"] {
  const next = { ...stats };
  if (next.inflation > 35) {
    const bite = Math.round((next.inflation - 35) / 14);
    next.economy = clamp(next.economy - bite);
    if (next.inflation > 70) next.people = clamp(next.people - 2);
  }
  if (next.forces < 22) {
    next.people = clamp(next.people - 1);
  }
  return next;
}

function collapseOf(state: GameState): CollapseReason | null {
  if (state.stats.corruption >= 100) return "corruption";
  if (state.stats.economy <= 0) return "economy";
  if (state.stats.prestige <= 0) return "prestige";
  if (state.stats.forces <= 0) return "forces";
  if (state.stats.people <= 0) return "people";
  if (state.flags.includes("revolt_repressed") && state.stats.people < 16) return "revolt";
  if (state.flags.includes("revolt_handled") && state.stats.people < 10) return "revolt";
  return null;
}

function endWith(
  state: GameState,
  kind: GameState["endKind"],
  reason: CollapseReason | null,
  title: string,
  body: string,
): GameState {
  return {
    ...state,
    phase: "end",
    endKind: kind,
    collapse: reason,
    endTitle: title,
    endBody: body,
    currentEventId: null,
    lastFlash: {},
  };
}

function snapshot(state: GameState): GameState {
  return {
    ...state,
    history: [
      ...state.history,
      {
        year: Math.floor(state.calendarYear),
        mandateYear: state.mandateYear,
        stats: { ...state.stats },
        money: state.money,
      },
    ],
  };
}

function eligible(state: GameState, ev: GameEvent) {
  if (!ev.eras.includes(state.era)) return false;
  if (ev.once && state.seen.includes(ev.id)) return false;
  if (ev.minYear && state.calendarYear < ev.minYear - 8) return false;
  if (ev.maxYear && state.calendarYear > ev.maxYear + 6) return false;
  if (ev.requireFlags?.some((f) => !state.flags.includes(f))) return false;
  if (ev.forbidFlags?.some((f) => state.flags.includes(f))) return false;
  if (ev.minStats) {
    for (const [k, v] of Object.entries(ev.minStats) as [StatKey, number][]) {
      if (state.stats[k] < v) return false;
    }
  }
  if (ev.maxStats) {
    for (const [k, v] of Object.entries(ev.maxStats) as [StatKey, number][]) {
      if (state.stats[k] > v) return false;
    }
  }
  if (ev.kind === "desastre" && state.disastersUsed >= MAX_DISASTERS) return false;
  if (ev.id === "revolta" && !state.queued.includes("revolta")) return false;
  return true;
}

export function pickEvent(state: GameState): string | null {
  if (state.queued.length) {
    const id = state.queued[0];
    if (EVENT_MAP[id]) return id;
  }
  const pool = EVENTS.filter((e) => eligible(state, e) && e.id !== "revolta");
  if (!pool.length) return EVENTS.find((e) => e.eras.includes(state.era))?.id ?? EVENTS[0].id;
  const urgent = pool.filter((e) => (e.priority ?? 0) >= 80 && !state.seen.includes(e.id));
  if (urgent.length) {
    urgent.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    return urgent[0].id;
  }
  const weighted = pool.flatMap((e) => Array(Math.max(1, Math.round((e.weight ?? 1) * 10))).fill(e.id));
  return weighted[Math.floor(Math.random() * weighted.length)] ?? pool[0].id;
}

function grantAwards(state: GameState, ids: string[]): GameState {
  let next = state;
  const pending = [...state.pendingAwards];
  for (const id of ids) {
    const def = AWARD_MAP[id];
    if (!def || hasAward(next, id) || pending.includes(id)) continue;
    const applied = applyEffects(next, def.effects);
    next = {
      ...next,
      stats: applied.stats,
      money: applied.money,
      influence: applied.influence,
      awards: [...next.awards, { id, year: Math.floor(next.calendarYear) }],
      souvenirs: def.category === "bajo" ? [...next.souvenirs, id] : next.souvenirs,
      pendingAwards: [...pending, id],
    };
    pending.push(id);
  }
  next = { ...next, pendingAwards: pending };
  return next;
}

function maybeRevoltQueue(state: GameState): string[] {
  const q = [...state.queued];
  if (state.stats.people <= 14 && !q.includes("revolta") && !state.seen.includes("revolta")) {
    q.unshift("revolta");
  }
  if (state.stats.forces <= 16 && !q.includes("inseguridad") && !state.seen.includes("inseguridad")) {
    q.push("inseguridad");
  }
  if (
    state.stats.forces <= 14 &&
    state.stats.prestige <= 28 &&
    !q.includes("invasion") &&
    !state.seen.includes("invasion")
  ) {
    q.push("invasion");
  }
  return q;
}

function afterCard(state: GameState): GameState {
  if (state.pendingAwards.length) return { ...state, phase: "award" };
  const cardsInTerm = state.cardsInTerm;
  const atTermEnd = cardsInTerm >= CARDS_PER_TERM;
  if (!atTermEnd) {
    const nextId = pickEvent(state);
    return { ...state, phase: "play", currentEventId: nextId, queued: state.queued.filter((id) => id !== nextId) };
  }

  if (state.term === 1) {
    const people = state.stats.people;
    const kind = people < 22 ? "lost" : people <= 48 ? "runoff" : "standard";
    return snapshot({
      ...state,
      phase: "election",
      electionKind: kind,
      currentEventId: null,
      cardsInTerm: 0,
    });
  }

  const maxTerms = state.constitutionReformed ? 3 : MAX_TERMS_DEFAULT;
  if (state.term >= maxTerms && !state.isDictatorship) {
    return {
      ...state,
      phase: "extension",
      currentEventId: null,
      cardsInTerm: 0,
    };
  }

  if (state.constitutionReformed && state.term === 2) {
    const people = state.stats.people;
    const kind = people < 22 ? "lost" : people <= 48 ? "runoff" : "standard";
    return snapshot({
      ...state,
      phase: "election",
      electionKind: kind,
      currentEventId: null,
      cardsInTerm: 0,
    });
  }

  return finishLegacy(state);
}

export function finishLegacy(state: GameState): GameState {
  const rank = rankOf(state);
  const title = `Legado: ${rank.label}`;
  const body = legacyBlurb(state);
  return snapshot(
    endWith(state, "legacy", null, title, body),
  );
}

export function legacyBlurb(state: GameState): string {
  const rank = rankOf(state);
  const bits: string[] = [];
  bits.push(
    `Gobernaste ${Math.floor(state.mandateYear)} años, de ${ERAS[state.era].start} a ${Math.floor(state.calendarYear)}, y el país te recuerda como ${rank.label.toLowerCase()}.`,
  );
  if (state.isDictatorship) {
    bits.push("La imagen exterior quedó marcada por el atajo autoritario: esa herida no se cierra.");
  }
  if (state.flags.includes("independent")) bits.push("Tu firma está en el acta de la Independencia.");
  if (state.flags.includes("malvinas_war")) bits.push("Malvinas quedó atada a tu mandato, con todo lo que eso pesa.");
  if (state.flags.includes("convertibility")) bits.push("El uno a uno fue tu apuesta: precios quietos, herramientas rotas.");
  if (state.flags.includes("corralito")) bits.push("El corralito es una palabra que todavía se pronuncia con tu nombre.");
  if (state.flags.includes("abortion_law")) bits.push("La marea verde encontró un recinto que le abrió la puerta.");
  if (state.flags.includes("ukraine_aid")) bits.push("Kiev tiene una condecoración con tu apellido.");
  if (state.awards.length) {
    bits.push(`El inventario de tu presidencia guarda ${state.awards.length} galardones y ${state.souvenirs.length} obsequios.`);
  }
  bits.push(
    `Inflación al ${Math.round(state.stats.inflation)}%, imagen del país al ${Math.round(state.stats.image)}%, pueblo al ${Math.round(state.stats.people)}%.`,
  );
  return bits.join(" ");
}

export function beginRun(name: string, era: EraId): GameState {
  const state = newRun(name, era);
  const id = pickEvent(state);
  return { ...state, currentEventId: id, seen: id ? [id] : [] };
}

export function resolveChoice(state: GameState, side: "left" | "right"): GameState {
  const ev = state.currentEventId ? EVENT_MAP[state.currentEventId] : null;
  if (!ev) return state;
  const choice: Choice = ev[side];

  if (choice.riskGameOver && Math.random() < choice.riskGameOver) {
    const reason = (choice.riskReason as CollapseReason) ?? "crime";
    const copy = COLLAPSE_COPY[reason] ?? COLLAPSE_COPY.crime;
    return snapshot(endWith(state, "defeat", reason, copy.title, copy.body));
  }

  const applied = applyEffects(state, choice.effects);
  let imageCap = state.imageCap;
  let isDictatorship = state.isDictatorship;
  if (choice.dictatorship) {
    isDictatorship = true;
    imageCap = Math.min(imageCap, 18);
    applied.stats.image = Math.min(applied.stats.image, imageCap);
  }

  let ideology = { ...state.ideology };
  if (choice.ideology) {
    for (const [k, v] of Object.entries(choice.ideology) as [keyof typeof ideology, number][]) {
      ideology[k] = ideology[k] + v;
    }
  }

  const yearGain = ev.yearsAdvance ?? ERAS[state.era].jump;
  const mandateGain = YEARS_PER_TERM / CARDS_PER_TERM;
  let next: GameState = {
    ...state,
    stats: tickInflation(applied.stats),
    money: applied.money,
    influence: applied.influence,
    lastFlash: applied.flash,
    flags: dropFlags(addFlags(state.flags, choice.flags), choice.unsetFlags),
    ideology,
    imageCap,
    isDictatorship,
    marketClosed: state.marketClosed || Boolean(choice.marketClosed),
    constitutionReformed: state.constitutionReformed || Boolean(choice.flags?.includes("constitution_reformed")),
    calendarYear: Math.min(ERAS[state.era].end, state.calendarYear + yearGain),
    mandateYear: state.mandateYear + mandateGain,
    cardsInTerm: state.cardsInTerm + 1,
    cardsTotal: state.cardsTotal + 1,
    seen: state.seen.includes(ev.id) ? state.seen : [...state.seen, ev.id],
    queued: state.queued.filter((id) => id !== ev.id),
    periodLog: [
      ...state.periodLog,
      { year: Math.floor(state.calendarYear), title: ev.title, choice: choice.label, log: choice.log },
    ],
    disastersUsed: state.disastersUsed + (ev.kind === "desastre" ? 1 : 0),
  };

  if (choice.followUp) next.queued = [choice.followUp, ...next.queued];
  const souvenirGrant = (choice.souvenirs ?? []).filter((id) => !hasAward(next, id));
  next = grantAwards(next, [...souvenirGrant, ...detectAwards(next)]);
  next.queued = maybeRevoltQueue(next);

  const collapsed = collapseOf(next);
  if (collapsed) {
    const copy = COLLAPSE_COPY[collapsed];
    return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
  }

  const nearElection =
    next.cardsInTerm === CARDS_PER_TERM - 2 &&
    (next.term === 1 || (next.term === 2 && next.constitutionReformed));
  if (nearElection && next.stats.people < 42 && !next.warnedThisTerm) {
    return { ...next, phase: "warning", warnedThisTerm: true };
  }

  if (next.pendingAwards.length) {
    return { ...next, phase: "award" };
  }

  return afterCard({ ...next, currentEventId: null });
}

export function dismissAward(state: GameState): GameState {
  const rest = state.pendingAwards.slice(1);
  const next = { ...state, pendingAwards: rest };
  if (rest.length) return { ...next, phase: "award" };
  if (next.phase === "warning") return next;
  return afterCard({ ...next, currentEventId: null, phase: "play" });
}

export function continueAfterWarning(state: GameState): GameState {
  if (state.pendingAwards.length) return { ...state, phase: "award" };
  return afterCard({ ...state, phase: "play", currentEventId: null });
}

export function resolveElection(
  state: GameState,
  option: "standard" | "dirty" | "dictatorship",
): GameState {
  if (state.electionKind === "lost") {
    const copy = COLLAPSE_COPY.election;
    return snapshot(endWith(state, "defeat", "election", copy.title, copy.body));
  }

  let win = true;
  let next = { ...state, electionKind: null, warnedThisTerm: false };

  if (option === "dictatorship") {
    const applied = applyEffects(next, {
      image: -50,
      prestige: -18,
      people: -16,
      corruption: 18,
      forces: 12,
    });
    next = {
      ...next,
      stats: applied.stats,
      imageCap: Math.min(next.imageCap, 18),
      isDictatorship: true,
      lastFlash: applied.flash,
    };
    next.stats.image = Math.min(next.stats.image, next.imageCap);
    next.term += 1;
    next.flags = addFlags(next.flags, ["dictatorship_self"]);
    const collapsed = collapseOf(next);
    if (collapsed) {
      const copy = COLLAPSE_COPY[collapsed];
      return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
    }
    const id = pickEvent(next);
    return { ...next, phase: "play", currentEventId: id, seen: id && !next.seen.includes(id) ? [...next.seen, id] : next.seen };
  }

  if (state.electionKind === "runoff") {
    const chance = option === "dirty" ? 0.55 : 0.5;
    win = Math.random() < chance;
    if (option === "dirty") {
      const applied = applyEffects(next, { money: -1_200_000, prestige: -8, corruption: 8, people: 4 });
      next = { ...next, stats: applied.stats, money: applied.money, lastFlash: applied.flash };
    }
  }

  if (!win) {
    const copy = COLLAPSE_COPY.election;
    return snapshot(endWith(next, "defeat", "election", copy.title, copy.body));
  }

  next.term += 1;
  const id = pickEvent(next);
  return { ...next, phase: "play", currentEventId: id, seen: id && !next.seen.includes(id) ? [...next.seen, id] : next.seen };
}

export function resolveExtension(
  state: GameState,
  option: "leave" | "reform" | "coup",
): GameState {
  if (option === "leave") return finishLegacy(state);
  if (option === "reform") {
    const cost = shopPrice(3_800_000, state.stats.inflation);
    if (state.influence < 18 || state.money < cost) {
      return finishLegacy({
        ...state,
        periodLog: [
          ...state.periodLog,
          {
            year: Math.floor(state.calendarYear),
            title: "Reforma fallida",
            choice: "Sin votos",
            log: "No alcanzaron la plata ni las influencias para tocar la Constitución.",
          },
        ],
      });
    }
    const applied = applyEffects(state, { corruption: 10, prestige: -6, people: -6, money: -cost, influence: -18 });
    const next: GameState = {
      ...state,
      stats: applied.stats,
      money: applied.money,
      influence: applied.influence,
      constitutionReformed: true,
      flags: addFlags(state.flags, ["constitution_reformed"]),
      lastFlash: applied.flash,
      term: 2,
      phase: "election",
      electionKind: state.stats.people < 22 ? "lost" : state.stats.people <= 48 ? "runoff" : "standard",
    };
    return next;
  }
  const applied = applyEffects(state, {
    image: -55,
    prestige: -20,
    people: -18,
    corruption: 20,
    forces: 14,
  });
  const next: GameState = {
    ...state,
    stats: applied.stats,
    imageCap: Math.min(state.imageCap, 18),
    isDictatorship: true,
    lastFlash: applied.flash,
    flags: addFlags(state.flags, ["dictatorship_self"]),
    term: state.term + 1,
    cardsInTerm: 0,
  };
  next.stats.image = Math.min(next.stats.image, next.imageCap);
  const collapsed = collapseOf(next);
  if (collapsed) {
    const copy = COLLAPSE_COPY[collapsed];
    return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
  }
  const id = pickEvent(next);
  return { ...next, phase: "play", currentEventId: id };
}

export function buyItem(state: GameState, itemId: string): GameState | { error: string } {
  const item = SHOP.find((s) => s.id === itemId);
  if (!item) return { error: "Ese artículo ya no está en el inventario." };
  const price = shopPrice(item.costARS, state.stats.inflation);
  if (state.owned.includes(item.id)) return { error: "Ya forma parte de tu patrimonio." };
  if (state.money < price) return { error: "No alcanzan los pesos." };
  if (state.influence < item.costInfluence) return { error: "No alcanza la influencia." };
  const list = availableShop(state.calendarYear, state.mandateYear, state.owned);
  if (!list.some((i) => i.id === item.id)) return { error: "Ese lujo todavía no existe en esta era." };

  let effects: Effects = { ...item.effects, money: -price, influence: -(item.costInfluence) };
  const poor = state.stats.people < 46 || state.stats.economy < 40;
  if (item.luxury && poor) {
    effects = {
      ...effects,
      people: (effects.people ?? 0) - 20,
      corruption: (effects.corruption ?? 0) + 14,
      prestige: (effects.prestige ?? 0) - 6,
    };
  }
  const applied = applyEffects(state, effects);
  let next: GameState = {
    ...state,
    stats: applied.stats,
    money: applied.money,
    influence: applied.influence,
    lastFlash: applied.flash,
    owned: [...state.owned, item.id],
    flags: addFlags(state.flags, item.flags),
    constitutionReformed: state.constitutionReformed || item.id === "reforma",
    periodLog: [
      ...state.periodLog,
      {
        year: Math.floor(state.calendarYear),
        title: item.name,
        choice: "Adquisición",
        log:
          item.luxury && poor
            ? `Escándalo: compró ${item.name} con el pueblo en crisis.`
            : `Adquirió ${item.name}.`,
      },
    ],
  };
  const collapsed = collapseOf(next);
  if (collapsed) {
    const copy = COLLAPSE_COPY[collapsed];
    return snapshot(endWith(next, "defeat", collapsed, copy.title, copy.body));
  }
  next = grantAwards(next, detectAwards(next));
  if (next.pendingAwards.length) {
    return { ...next, phase: "award" };
  }
  return next;
}

export function takeLoan(state: GameState): GameState | { error: string } {
  if (state.marketClosed) return { error: "El mercado está cerrado. Nadie descuenta tus papeles." };
  if (state.stats.prestige < 28) return { error: "Sin prestigio no hay mostrador que te atienda." };
  if (state.stats.image < 22 || state.imageCap <= 20) {
    return { error: "La imagen del país no sostiene un rollover." };
  }
  const applied = applyEffects(state, {
    money: 4_800_000,
    inflation: 14,
    prestige: -3,
    image: -3,
    economy: 4,
  });
  return {
    ...state,
    stats: applied.stats,
    money: applied.money,
    lastFlash: applied.flash,
    flags: addFlags(state.flags, ["debt"]),
    periodLog: [
      ...state.periodLog,
      {
        year: Math.floor(state.calendarYear),
        title: "Empréstito",
        choice: "Tomar crédito",
        log: "Se tomó un préstamo. La inflación, el asesino silencioso, se alimentó.",
      },
    ],
  };
}

export function canUnlockEra(rankId: string, era: EraId) {
  if (!ERAS[era].lockedByDefault) return true;
  return rankId === "idolo" || rankId === "absoluto" || rankId === "procer";
}
