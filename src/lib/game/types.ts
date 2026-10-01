export const STAT_KEYS = [
  "economy",
  "people",
  "forces",
  "corruption",
  "prestige",
  "inflation",
  "image",
] as const;

export type StatKey = (typeof STAT_KEYS)[number];

export type EraId =
  | "independencia"
  | "dictadura"
  | "noventa"
  | "dosmil"
  | "dieciocho";

export type Phase =
  | "title"
  | "play"
  | "warning"
  | "election"
  | "extension"
  | "award"
  | "end";

export type AwardCategory = "dificil" | "medio" | "bajo";

export type EventKind =
  | "historia"
  | "diplomacia"
  | "provincia"
  | "desastre"
  | "escandalo"
  | "revolta"
  | "flavor";

export type Effects = Partial<Record<StatKey, number>> & {
  money?: number;
  influence?: number;
};

export type Ideology = {
  market: number;
  washington: number;
  brics: number;
  militar: number;
  rights: number;
};

export type Choice = {
  label: string;
  narrative: string;
  effects: Effects;
  flags?: string[];
  unsetFlags?: string[];
  followUp?: string;
  souvenirs?: string[];
  awards?: string[];
  ideology?: Partial<Ideology>;
  marketClosed?: boolean;
  dictatorship?: boolean;
  log: string;
  riskGameOver?: number;
  riskReason?: string;
};

export type GameEvent = {
  id: string;
  speaker: string;
  role: string;
  title: string;
  text: string;
  art: string;
  kind: EventKind;
  eras: EraId[];
  minYear?: number;
  maxYear?: number;
  once?: boolean;
  priority?: number;
  weight?: number;
  requireFlags?: string[];
  forbidFlags?: string[];
  minStats?: Partial<Record<StatKey, number>>;
  maxStats?: Partial<Record<StatKey, number>>;
  yearsAdvance?: number;
  left: Choice;
  right: Choice;
};

export type ShopItem = {
  id: string;
  name: string;
  blurb: string;
  costARS: number;
  costInfluence: number;
  minYear: number;
  maxYear?: number;
  luxury: boolean;
  minMandateYear?: number;
  effects: Effects;
  narrative: string;
  flags?: string[];
};

export type AwardDef = {
  id: string;
  category: AwardCategory;
  title: string;
  subtitle: string;
  image: string;
  effects: Effects;
};

export type OwnedAward = {
  id: string;
  year: number;
};

export type LogEntry = {
  year: number;
  title: string;
  choice: string;
  log: string;
};

export type HistoryPoint = {
  year: number;
  mandateYear: number;
  stats: Record<StatKey, number>;
  money: number;
};

export type Overlay =
  | { type: "award"; awardId: string }
  | { type: "shop" }
  | { type: "profile" }
  | { type: "loan-blocked"; reason: string };

export type ElectionKind = "standard" | "runoff" | "lost";

export type CollapseReason =
  | "economy"
  | "people"
  | "forces"
  | "prestige"
  | "corruption"
  | "revolt"
  | "election"
  | "crime"
  | "invasion"
  | "trial";

export type EndKind = "victory" | "defeat" | "legacy";

export type GameState = {
  version: number;
  phase: Phase;
  leaderName: string;
  era: EraId;
  calendarYear: number;
  mandateYear: number;
  term: number;
  cardsInTerm: number;
  cardsTotal: number;
  stats: Record<StatKey, number>;
  imageCap: number;
  money: number;
  influence: number;
  flags: string[];
  seen: string[];
  owned: string[];
  awards: OwnedAward[];
  souvenirs: string[];
  ideology: Ideology;
  currentEventId: string | null;
  queued: string[];
  pendingAwards: string[];
  periodLog: LogEntry[];
  archive: LogEntry[];
  history: HistoryPoint[];
  disastersUsed: number;
  marketClosed: boolean;
  constitutionReformed: boolean;
  isDictatorship: boolean;
  warnedThisTerm: boolean;
  electionKind: ElectionKind | null;
  collapse: CollapseReason | null;
  endKind: EndKind | null;
  endTitle: string;
  endBody: string;
  lastFlash: Partial<Record<StatKey, "up" | "down">>;
  startedAt: number;
};

export type Legacy = {
  version: number;
  unlockedEras: EraId[];
  bestRank: string;
  runs: number;
  idolRuns: number;
};
