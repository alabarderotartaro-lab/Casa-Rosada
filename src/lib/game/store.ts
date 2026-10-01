import { create } from "zustand";
import { beginRun, buyItem, continueAfterWarning, dismissAward, resolveChoice, resolveElection, resolveExtension, takeLoan } from "./engine";
import { loadLegacy, loadRun, recordRunEnd, saveLegacy, saveRun } from "./save";
import type { EraId, GameState, Legacy } from "./types";

type Overlay = "shop" | "profile" | "loan" | null;

type Store = {
  hydrated: boolean;
  state: GameState | null;
  legacy: Legacy;
  overlay: Overlay;
  toast: string | null;
  hydrate: () => void;
  start: (name: string, era: EraId) => void;
  choose: (side: "left" | "right") => void;
  buy: (id: string) => void;
  loan: () => void;
  setOverlay: (o: Overlay) => void;
  dismissAward: () => void;
  skipWarning: () => void;
  election: (option: "standard" | "dirty" | "dictatorship") => void;
  extension: (option: "leave" | "reform" | "coup") => void;
  abandon: () => void;
  clearToast: () => void;
};

function persist(state: GameState | null) {
  saveRun(state);
}

export const useGame = create<Store>((set, get) => ({
  hydrated: false,
  state: null,
  legacy: { version: 2, unlockedEras: ["independencia", "dictadura", "noventa"], bestRank: "querido", runs: 0, idolRuns: 0 },
  overlay: null,
  toast: null,
  hydrate: () => {
    if (get().hydrated) return;
    const legacy = loadLegacy();
    const run = loadRun();
    set({ hydrated: true, legacy, state: run });
  },
  start: (name, era) => {
    const state = beginRun(name, era);
    persist(state);
    set({ state, overlay: null, toast: null, hydrated: true });
  },
  choose: (side) => {
    const cur = get().state;
    if (!cur || cur.phase !== "play") return;
    let next = resolveChoice(cur, side);
    if (next.phase === "end") {
      const legacy = recordRunEnd(next, get().legacy);
      persist(next);
      set({ state: next, legacy, overlay: null });
      return;
    }
    persist(next);
    set({ state: next });
  },
  buy: (id) => {
    const cur = get().state;
    if (!cur) return;
    const next = buyItem(cur, id);
    if ("error" in next) {
      set({ toast: next.error });
      return;
    }
    if (next.phase === "end") {
      const legacy = recordRunEnd(next, get().legacy);
      persist(next);
      set({ state: next, legacy, overlay: null, toast: null });
      return;
    }
    persist(next);
    set({ state: next, toast: "Adquisición registrada en el patrimonio." });
  },
  loan: () => {
    const cur = get().state;
    if (!cur) return;
    const next = takeLoan(cur);
    if ("error" in next) {
      set({ toast: next.error, overlay: "loan" });
      return;
    }
    persist(next);
    set({ state: next, toast: "Crédito acreditado. La inflación, el asesino silencioso, se alimentó." });
  },
  setOverlay: (o) => set({ overlay: o }),
  dismissAward: () => {
    const cur = get().state;
    if (!cur) return;
    const next = dismissAward(cur);
    persist(next);
    set({ state: next });
  },
  skipWarning: () => {
    const cur = get().state;
    if (!cur) return;
    const next = continueAfterWarning(cur);
    persist(next);
    set({ state: next, overlay: null });
  },
  election: (option) => {
    const cur = get().state;
    if (!cur) return;
    const next = resolveElection(cur, option);
    if (next.phase === "end") {
      const legacy = recordRunEnd(next, get().legacy);
      persist(next);
      set({ state: next, legacy, overlay: null });
      return;
    }
    persist(next);
    set({ state: next });
  },
  extension: (option) => {
    const cur = get().state;
    if (!cur) return;
    const next = resolveExtension(cur, option);
    if (next.phase === "end") {
      const legacy = recordRunEnd(next, get().legacy);
      persist(next);
      set({ state: next, legacy, overlay: null });
      return;
    }
    persist(next);
    set({ state: next });
  },
  abandon: () => {
    persist(null);
    set({ state: null, overlay: null });
  },
  clearToast: () => set({ toast: null }),
}));

export { saveLegacy };
