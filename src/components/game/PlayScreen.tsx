import { useEffect, useState } from "react";
import {
  Globe,
  Landmark,
  Scale,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Award,
  Briefcase,
} from "lucide-react";
import { RANKS, STAT_HINT, STAT_LABEL } from "@/lib/game/constants";
import { EVENT_MAP } from "@/lib/game/events";
import { formatARS, mandateLabel, rankOf, reputationScore, STAT_ORDER, yearLabel } from "@/lib/game/format";
import { useGame } from "@/lib/game/store";
import type { StatKey } from "@/lib/game/types";
import { SunMark } from "./SunMark";
import { cn } from "@/lib/utils";

const ICONS: Record<StatKey, typeof Landmark> = {
  economy: Landmark,
  people: Users,
  forces: Shield,
  corruption: Scale,
  prestige: Award,
  inflation: TrendingUp,
  image: Globe,
};

export function PlayScreen() {
  const state = useGame((s) => s.state)!;
  const choose = useGame((s) => s.choose);
  const overlay = useGame((s) => s.overlay);
  const setOverlay = useGame((s) => s.setOverlay);
  const ev = state.currentEventId ? EVENT_MAP[state.currentEventId] : null;
  const rank = rankOf(state);
  const score = reputationScore(state);
  const [brokenArt, setBrokenArt] = useState(false);

  useEffect(() => {
    setBrokenArt(false);
  }, [ev?.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (state.phase !== "play" || overlay) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
      const sel = window.getSelection();
      if (sel && sel.toString().length > 0) return;
      if (e.key === "ArrowLeft") choose("left");
      if (e.key === "ArrowRight") choose("right");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [choose, overlay, state.phase]);

  return (
    <div className="min-h-dvh bg-navy">
      <div className="flag-ribbon" />
      <header className="border-b border-paper/10 px-3 py-3 sm:px-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SunMark className="size-8 shrink-0" />
            <div>
              <p className="font-display text-xl leading-none text-paper">{state.leaderName}</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                {yearLabel(state)} · {mandateLabel(state)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.7rem] text-mist">
            <Wallet className="size-3.5" />
            <span className="tabular-nums">{formatARS(state.money)}</span>
            <span className="text-subtle">· inf. {Math.round(state.influence)}</span>
          </div>
        </div>
        <div className="mx-auto mt-3 max-w-6xl">
          <p className="mb-1 flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.16em] text-subtle">
            <span>Reputación · {rank.label}</span>
            <span className="tabular-nums">{Math.round(score)}</span>
          </p>
          <div className="relative h-2 rounded-full bg-navy-3">
            <div
              className="h-full rounded-full bg-celeste transition-[width] duration-300"
              style={{ width: `${score}%` }}
            />
            {RANKS.map((r) => (
              <span
                key={r.id}
                className="absolute top-1/2 hidden h-2 w-px -translate-y-1/2 bg-paper/40 sm:block"
                style={{ left: `${r.min}%` }}
                title={r.label}
              />
            ))}
          </div>
          <div className="mt-1 hidden justify-between font-mono text-[0.55rem] uppercase tracking-[0.12em] text-subtle sm:flex">
            {RANKS.map((r) => (
              <span key={r.id} className={r.id === rank.id ? "text-celeste" : ""}>
                {r.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-4 px-3 py-4 sm:px-5 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
        <aside className="grid grid-cols-2 gap-2 lg:grid-cols-1">
          {STAT_ORDER.map((key) => {
            const Icon = ICONS[key];
            const value = state.stats[key];
            const flash = state.lastFlash[key];
            const warn =
              key === "corruption" ? value >= 78 : key === "inflation" ? value >= 70 : value <= 18;
            return (
              <div
                key={key}
                className={cn(
                  "rounded-[12px] border border-paper/10 bg-navy-2 p-2.5",
                  warn && "border-bad/40",
                  flash === "up" && "stat-flash-up",
                  flash === "down" && "stat-flash-down",
                )}
                title={STAT_HINT[key]}
              >
                <div className="flex items-center justify-between gap-2 text-muted">
                  <span className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.12em]">
                    <Icon className="size-3.5" />
                    {STAT_LABEL[key]}
                  </span>
                  <span className="tabular-nums text-xs text-paper">{Math.round(value)}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-3">
                  <div
                    className={cn(
                      "h-full rounded-full transition-[width,background-color] duration-300",
                      key === "corruption" || key === "inflation" ? "bg-bad/80" : "bg-celeste",
                    )}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
          <div className="col-span-2 flex gap-2 lg:col-span-1">
            <button
              type="button"
              onClick={() => setOverlay("shop")}
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[8px] border border-paper/15 bg-navy-2 text-sm font-medium text-paper"
            >
              <Briefcase className="size-4" />
              Patrimonio
            </button>
            <button
              type="button"
              onClick={() => setOverlay("profile")}
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-[8px] border border-paper/15 bg-navy-2 text-sm font-medium text-paper"
            >
              <Award className="size-4" />
              Perfil
            </button>
          </div>
        </aside>

        <section className="anim-enter min-w-0">
          {ev ? (
            <article className="overflow-hidden rounded-[24px] border border-paper/10 bg-navy-2">
              <div className="pointer-events-none relative aspect-[16/8] select-none">
                {brokenArt ? (
                  <div className="flag-wash absolute inset-0" />
                ) : (
                  <img
                    src={ev.art}
                    alt=""
                    draggable={false}
                    onError={() => setBrokenArt(true)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-2 via-transparent to-navy/20" />
                <span className="absolute left-3 top-3 rounded-[4px] bg-navy/70 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-celeste">
                  Expediente · {yearLabel(state)}
                </span>
              </div>
              <div className="select-text px-4 py-4 sm:px-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-celeste">
                  {ev.role} · {ev.speaker}
                </p>
                <h2 className="mt-2 font-display text-[1.7rem] leading-tight text-paper sm:text-3xl">
                  {ev.title}
                </h2>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-mist">{ev.text}</p>
              </div>
              {state.phase === "play" ? (
                <div className="grid gap-3 p-4 pt-0 sm:grid-cols-2 sm:p-6 sm:pt-0">
                  <Decree side="A" choice={ev.left} onPick={() => choose("left")} />
                  <Decree side="B" choice={ev.right} onPick={() => choose("right")} />
                </div>
              ) : (
                <div className="px-6 pb-6 text-sm text-muted">El recinto está en sesión privada.</div>
              )}
            </article>
          ) : (
            <div className="rounded-[24px] border border-paper/10 bg-navy-2 p-8 text-mist">
              El expediente está en pausa.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Decree({
  side,
  choice,
  onPick,
}: {
  side: string;
  choice: { label: string; narrative: string };
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      className="rounded-[16px] border border-paper/12 bg-navy px-4 py-4 text-left transition-[border-color,transform] duration-150 hover:border-celeste/60 active:scale-[0.99]"
    >
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-subtle">
        Decreto {side}
      </span>
      <span className="mt-1 block font-display text-xl text-paper">{choice.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-muted">{choice.narrative}</span>
    </button>
  );
}
