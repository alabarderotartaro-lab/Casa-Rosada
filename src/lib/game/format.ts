import { RANKS, type RankId } from "./constants";
import type { GameState, StatKey } from "./types";

export function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}

export function formatARS(n: number): string {
  const rounded = Math.round(n);
  const sign = rounded < 0 ? "-" : "";
  const abs = Math.abs(rounded)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}$ ${abs} ARS`;
}

export function inflationMultiplier(inflation: number) {
  return 1 + inflation / 45;
}

export function shopPrice(base: number, inflation: number) {
  return Math.round(base * inflationMultiplier(inflation));
}

export function reputationScore(state: GameState): number {
  const s = state.stats;
  const awardBonus = Math.min(12, state.awards.length * 2);
  return clamp(
    s.people * 0.32 +
      s.prestige * 0.18 +
      s.image * 0.18 +
      (100 - s.corruption) * 0.14 +
      s.economy * 0.1 +
      awardBonus,
  );
}

export function rankFromScore(score: number) {
  let current: (typeof RANKS)[number] = RANKS[0];
  for (const r of RANKS) {
    if (score >= r.min) current = r;
  }
  return current;
}

export function rankOf(state: GameState) {
  return rankFromScore(reputationScore(state));
}

export function isIdolOrProcer(rank: RankId) {
  return rank === "idolo" || rank === "absoluto" || rank === "procer";
}

export function flashFromDelta(before: number, after: number): "up" | "down" | undefined {
  if (after > before + 0.4) return "up";
  if (after < before - 0.4) return "down";
  return undefined;
}

export function yearLabel(state: GameState) {
  return `${Math.floor(state.calendarYear)}`;
}

export function mandateLabel(state: GameState) {
  const y = Math.min(8 + (state.constitutionReformed ? 4 : 0), Math.floor(state.mandateYear) + 1);
  const ordinal = state.term === 1 ? "1.er" : state.term === 2 ? "2.º" : "3.er";
  return `${ordinal} mandato · año ${y}`;
}

export const STAT_ORDER: StatKey[] = [
  "economy",
  "people",
  "forces",
  "corruption",
  "prestige",
  "inflation",
  "image",
];
