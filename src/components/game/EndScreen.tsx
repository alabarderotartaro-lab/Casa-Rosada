import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AWARD_MAP } from "@/lib/game/awards";
import { STAT_LABEL } from "@/lib/game/constants";
import { formatARS, rankOf } from "@/lib/game/format";
import { useGame } from "@/lib/game/store";
import type { StatKey } from "@/lib/game/types";
import { SunMark } from "./SunMark";

const LINES: { key: StatKey; color: string }[] = [
  { key: "economy", color: "#74ACDF" },
  { key: "people", color: "#C5DDF0" },
  { key: "forces", color: "#8AA7C2" },
  { key: "inflation", color: "#B85C6A" },
  { key: "image", color: "#6B9E8A" },
];

export function EndScreen() {
  const state = useGame((s) => s.state)!;
  const abandon = useGame((s) => s.abandon);
  const rank = rankOf(state);
  const awards = state.awards.map((a) => AWARD_MAP[a.id]).filter(Boolean);
  const data = state.history.map((h) => ({
    name: String(h.year),
    ...h.stats,
  }));
  const victory = state.endKind !== "defeat";

  return (
    <div className="min-h-dvh bg-navy">
      <div className="flag-ribbon" />
      <div className="relative">
        <img
          src="/art/office.jpg"
          alt=""
          className="absolute inset-0 h-64 w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-navy" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 sm:px-6">
        <div className="flex items-center gap-3 text-celeste">
          <SunMark />
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]">
            {victory ? "Cierre de mandato" : "Caída del gobierno"}
          </p>
        </div>
        <h1 className="mt-3 font-display text-4xl text-paper sm:text-5xl">{state.endTitle}</h1>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-mist">{state.endBody}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-celeste">
          {rank.label} · {formatARS(state.money)} · {state.awards.length} distinciones
        </p>

        <h2 className="mt-10 font-display text-2xl">Muestrario</h2>
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {awards.length ? (
            awards.map((a) => (
              <figure key={a.id} className="rounded-[16px] border border-paper/10 bg-navy-2 p-3 text-center">
                <img src={a.image} alt="" className="mx-auto size-16 rounded-full object-cover" />
                <figcaption className="mt-2 text-xs text-mist">{a.title}</figcaption>
                <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-subtle">
                  {a.category}
                </p>
              </figure>
            ))
          ) : (
            <p className="col-span-4 text-sm text-muted">Sin medallas ni souvenirs en este mandato.</p>
          )}
        </div>

        <h2 className="mt-10 font-display text-2xl">Evolución de indicadores</h2>
        <div className="mt-3 h-64 rounded-[16px] border border-paper/10 bg-navy-2 p-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="rgba(244,248,252,0.08)" />
              <XAxis dataKey="name" stroke="#8AA7C2" fontSize={11} />
              <YAxis domain={[0, 100]} stroke="#8AA7C2" fontSize={11} />
              <Tooltip
                contentStyle={{ background: "#12263A", border: "1px solid rgba(244,248,252,0.12)", color: "#F4F8FC" }}
              />
              <Legend formatter={(v) => STAT_LABEL[v as StatKey] ?? v} />
              {LINES.map((l) => (
                <Line key={l.key} type="monotone" dataKey={l.key} stroke={l.color} dot={false} strokeWidth={2} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <button
          type="button"
          onClick={abandon}
          className="mt-8 h-12 rounded-[8px] bg-paper px-6 font-semibold text-navy"
        >
          Nuevo mandato
        </button>
      </div>
    </div>
  );
}
