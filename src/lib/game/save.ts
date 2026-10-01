import { DEFAULT_LEGACY, LEGACY_KEY, RUN_KEY, SAVE_VERSION } from "./constants";
import { isIdolOrProcer, rankOf } from "./format";
import type { EraId, GameState, Legacy } from "./types";

export function loadLegacy(): Legacy {
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    if (!raw) return { ...DEFAULT_LEGACY, unlockedEras: [...DEFAULT_LEGACY.unlockedEras] };
    const parsed = JSON.parse(raw) as Legacy;
    return {
      ...DEFAULT_LEGACY,
      ...parsed,
      unlockedEras: Array.from(
        new Set([...(parsed.unlockedEras ?? []), ...DEFAULT_LEGACY.unlockedEras]),
      ) as EraId[],
    };
  } catch {
    return { ...DEFAULT_LEGACY, unlockedEras: [...DEFAULT_LEGACY.unlockedEras] };
  }
}

export function saveLegacy(legacy: Legacy) {
  try {
    localStorage.setItem(LEGACY_KEY, JSON.stringify(legacy));
  } catch {
    /* private mode */
  }
}

export function loadRun(): GameState | null {
  try {
    const raw = localStorage.getItem(RUN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GameState;
    if (parsed.version !== SAVE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveRun(state: GameState | null) {
  try {
    if (!state) localStorage.removeItem(RUN_KEY);
    else localStorage.setItem(RUN_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function recordRunEnd(state: GameState, legacy: Legacy): Legacy {
  const rank = rankOf(state);
  const unlocked = new Set(legacy.unlockedEras);
  if (isIdolOrProcer(rank.id)) {
    unlocked.add("dosmil");
    unlocked.add("dieciocho");
  }
  const order = ["odiado", "querido", "amado", "idolo", "absoluto", "procer"];
  const next: Legacy = {
    version: 2,
    unlockedEras: [...unlocked] as EraId[],
    bestRank:
      order.indexOf(rank.id) > order.indexOf(legacy.bestRank) ? rank.id : legacy.bestRank,
    runs: legacy.runs + 1,
    idolRuns: legacy.idolRuns + (isIdolOrProcer(rank.id) ? 1 : 0),
  };
  saveLegacy(next);
  return next;
}
