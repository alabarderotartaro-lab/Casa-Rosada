import type { EraId, GameState, Ideology, StatKey } from "./types";

export const SAVE_VERSION = 2;
export const RUN_KEY = "el-mandato-run-v2";
export const LEGACY_KEY = "el-mandato-legacy-v2";

export const CARDS_PER_TERM = 8;
export const YEARS_PER_TERM = 4;
export const MAX_TERMS_DEFAULT = 2;
export const MAX_DISASTERS = 3;
export const LOAN_AMOUNT = 4_800_000;
export const START_MONEY = 2_400_000;
export const START_INFLUENCE = 16;

export const STAT_LABEL: Record<StatKey, string> = {
  economy: "Economía",
  people: "Pueblo",
  forces: "Fuerzas",
  corruption: "Corrupción",
  prestige: "Prestigio",
  inflation: "Inflación",
  image: "Imagen del país",
};

export const STAT_HINT: Record<StatKey, string> = {
  economy: "Riqueza del pueblo y capacidad productiva.",
  people: "Felicidad. En el piso, estalla la revuelta.",
  forces: "Lealtad militar. Baja, hay inseguridad o invasión.",
  corruption: "Si llega a techo, el Estado se disuelve.",
  prestige: "Peso diplomático y acceso a crédito.",
  inflation: "El asesino silencioso: encarece todo.",
  image: "Percepción exterior. Una dictadura la quiebra.",
};

export const RANKS = [
  { id: "odiado", min: 0, label: "Odiado" },
  { id: "querido", min: 18, label: "Querido" },
  { id: "amado", min: 38, label: "Amado" },
  { id: "idolo", min: 58, label: "Ídolo" },
  { id: "absoluto", min: 76, label: "Líder Absoluto" },
  { id: "procer", min: 90, label: "Prócer" },
] as const;

export type RankId = (typeof RANKS)[number]["id"];

export const ERAS: Record<
  EraId,
  {
    id: EraId;
    label: string;
    span: string;
    blurb: string;
    start: number;
    end: number;
    lockedByDefault: boolean;
    art: string;
    jump: number;
  }
> = {
  independencia: {
    id: "independencia",
    label: "Independencia",
    span: "1816 — 1945",
    blurb: "Nacer como país, cruzar los Andes y elegir bando en las guerras mundiales.",
    start: 1816,
    end: 1945,
    lockedByDefault: false,
    art: "/art/independence.jpg",
    jump: 6,
  },
  dictadura: {
    id: "dictadura",
    label: "Dictadura y Malvinas",
    span: "1976 — 1983",
    blurb: "El Proceso, el Mundial y el Atlántico Sur. Gobernar es sobrevivir al cuartel.",
    start: 1976,
    end: 1983,
    lockedByDefault: false,
    art: "/art/dictatorship.jpg",
    jump: 0.5,
  },
  noventa: {
    id: "noventa",
    label: "Los noventa",
    span: "1989 — 1999",
    blurb: "Uno a uno, privatizaciones y un cohete que Washington quiere apagar.",
    start: 1989,
    end: 1999,
    lockedByDefault: false,
    art: "/art/nineties.jpg",
    jump: 0.6,
  },
  dosmil: {
    id: "dosmil",
    label: "El dos mil",
    span: "2001 — 2013",
    blurb: "Corralito, default, retenciones y un papa argentino. Era bloqueada al inicio.",
    start: 2001,
    end: 2013,
    lockedByDefault: true,
    art: "/art/crisis.jpg",
    jump: 0.7,
  },
  dieciocho: {
    id: "dieciocho",
    label: "La era presente",
    span: "2015 — 2026",
    blurb: "Marea verde, alineaciones y un país que discute todo. Se desbloquea como Ídolo o Prócer.",
    start: 2015,
    end: 2026,
    lockedByDefault: true,
    art: "/art/rights.jpg",
    jump: 0.7,
  },
};

export const EMPTY_IDEOLOGY: Ideology = {
  market: 0,
  washington: 0,
  brics: 0,
  militar: 0,
  rights: 0,
};

export function defaultStats(era: EraId): Record<StatKey, number> {
  switch (era) {
    case "dictadura":
      return {
        economy: 44,
        people: 36,
        forces: 72,
        corruption: 42,
        prestige: 28,
        inflation: 48,
        image: 26,
      };
    case "noventa":
      return {
        economy: 38,
        people: 42,
        forces: 48,
        corruption: 36,
        prestige: 40,
        inflation: 62,
        image: 44,
      };
    case "dosmil":
      return {
        economy: 28,
        people: 34,
        forces: 46,
        corruption: 40,
        prestige: 22,
        inflation: 38,
        image: 30,
      };
    case "dieciocho":
      return {
        economy: 40,
        people: 48,
        forces: 44,
        corruption: 38,
        prestige: 42,
        inflation: 52,
        image: 40,
      };
    default:
      return {
        economy: 48,
        people: 52,
        forces: 50,
        corruption: 18,
        prestige: 46,
        inflation: 14,
        image: 50,
      };
  }
}

export function newRun(name: string, era: EraId): GameState {
  const stats = defaultStats(era);
  const year = ERAS[era].start;
  return {
    version: SAVE_VERSION,
    phase: "play",
    leaderName: name.trim() || "El Mandatario",
    era,
    calendarYear: year,
    mandateYear: 0,
    term: 1,
    cardsInTerm: 0,
    cardsTotal: 0,
    stats,
    imageCap: 100,
    money: START_MONEY,
    influence: START_INFLUENCE,
    flags: [],
    seen: [],
    owned: [],
    awards: [],
    souvenirs: [],
    ideology: { ...EMPTY_IDEOLOGY },
    currentEventId: null,
    queued: [],
    pendingAwards: [],
    periodLog: [],
    archive: [],
    history: [{ year, mandateYear: 0, stats: { ...stats }, money: START_MONEY }],
    disastersUsed: 0,
    marketClosed: false,
    constitutionReformed: false,
    isDictatorship: false,
    warnedThisTerm: false,
    electionKind: null,
    collapse: null,
    endKind: null,
    endTitle: "",
    endBody: "",
    lastFlash: {},
    startedAt: Date.now(),
  };
}

export const DEFAULT_LEGACY = {
  version: 2,
  unlockedEras: ["independencia", "dictadura", "noventa"] as EraId[],
  bestRank: "querido",
  runs: 0,
  idolRuns: 0,
};

export const COLLAPSE_COPY: Record<
  string,
  { title: string; body: string }
> = {
  economy: {
    title: "Hambre y éxodo",
    body: "La economía tocó fondo. Los mercados se vacían, las estaciones se llenan y el Estado se disuelve entre saqueos y silencios.",
  },
  people: {
    title: "La plaza vacía",
    body: "Nadie sale a escucharte. Un gobierno sin pueblo no es gobierno: te dejan solo con los retratos y el eco.",
  },
  forces: {
    title: "Las armas cambian de dueño",
    body: "Las tropas se sublevan. Un general anuncia por cadena que asumió para restaurar el orden. Tu uniforme ya no manda.",
  },
  prestige: {
    title: "Paria",
    body: "El mundo te declara intocable. Sin crédito, sin aliados y sin pasaporte que valga, el Estado se apaga detrás de un embargo.",
  },
  corruption: {
    title: "El Estado era la red",
    body: "La corrupción llegó a techo. Cada despacho es una causa, cada aliado un arrepentido. Caés por el peso de tu propia arquitectura.",
  },
  revolt: {
    title: "La revolución",
    body: "La felicidad del pueblo tocó el piso. Las columnas entran a la Casa, queman papeles y nombran una junta. Tu mandato termina en la calle.",
  },
  election: {
    title: "Derrota electoral",
    body: "Las urnas hablaron y no era tu nombre. El recuento es limpio, o bastante. Entregás la banda en el Congreso.",
  },
  crime: {
    title: "El crimen salió a la luz",
    body: "Los sicarios hablaron, o los dejaron hablar. La causa cubre la tapa de todos los diarios. No hay banda que tape eso.",
  },
  invasion: {
    title: "El mapa se parte",
    body: "Con las fuerzas en ruinas, una potencia extranjera impone hechos. La Cancillería redacta protestas que nadie lee.",
  },
  trial: {
    title: "Culpable",
    body: "El tribunal no compró tu relato. La sentencia es destitución, y el país aplaude en la vereda del palacio.",
  },
};
