import { useState } from "react";
import { Lock } from "lucide-react";
import { ERAS } from "@/lib/game/constants";
import type { EraId } from "@/lib/game/types";
import { useGame } from "@/lib/game/store";
import { SunMark } from "./SunMark";

const ORDER: EraId[] = ["independencia", "dictadura", "noventa", "dosmil", "dieciocho"];

export function TitleScreen() {
  const start = useGame((s) => s.start);
  const legacy = useGame((s) => s.legacy);
  const [name, setName] = useState("El Mandatario");
  const [era, setEra] = useState<EraId>("independencia");

  return (
    <div className="relative min-h-dvh overflow-hidden">
      <img
        src="/art/office.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/30" />
      <div className="flag-ribbon absolute inset-x-0 top-0" />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-end px-4 pb-10 pt-16 sm:px-6">
        <div className="mb-6 flex items-center gap-3 text-celeste">
          <SunMark className="size-8" />
          <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em]">
            Presidencia de la Nación
          </p>
        </div>
        <h1 className="max-w-xl font-display text-[3.1rem] leading-[0.92] tracking-[-0.03em] text-paper sm:text-6xl">
          El Mandato
        </h1>
        <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mist">
          Dos mandatos de cuatro años. Un expediente por decisión. El pueblo, las armas y el
          mundo llevan la cuenta — vos no ves los números, ves las consecuencias.
        </p>

        <label className="mt-8 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">
          Nombre de la presidencia
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 h-12 w-full max-w-md rounded-[8px] border border-paper/15 bg-navy-2 px-3 text-[0.95rem] font-medium text-paper outline-none focus:border-celeste"
          />
        </label>

        <div className="mt-4">
          <button
            type="button"
            onClick={() => start(name, era)}
            className="h-12 rounded-[8px] bg-paper px-6 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.98]"
          >
            Asumir el mando
          </button>
        </div>

        <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle">
          Elegí una era
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((id) => {
            const meta = ERAS[id];
            const locked = meta.lockedByDefault && !legacy.unlockedEras.includes(id);
            const active = era === id;
            return (
              <button
                key={id}
                type="button"
                disabled={locked}
                onClick={() => setEra(id)}
                className={`overflow-hidden rounded-[16px] border text-left transition-[transform,border-color] duration-150 ${
                  active ? "border-celeste" : "border-paper/12"
                } ${locked ? "opacity-50" : "hover:border-paper/30"} bg-navy-2`}
              >
                <div className="relative h-24 overflow-hidden">
                  <img
                    src={meta.art}
                    alt=""
                    className="pointer-events-none h-full w-full object-cover select-none"
                    draggable={false}
                  />
                  {locked ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-navy/55">
                      <Lock className="size-5 text-mist" />
                    </div>
                  ) : null}
                </div>
                <div className="p-3">
                  <p className="font-display text-lg text-paper">{meta.label}</p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-celeste">
                    {meta.span}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {locked
                      ? "Se desbloquea al terminar una era inicial como Ídolo o Prócer."
                      : meta.blurb}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => start(name, era)}
            className="h-12 rounded-[8px] bg-paper px-6 text-sm font-semibold text-navy transition-transform duration-150 active:scale-[0.98]"
          >
            Asumir el mando
          </button>
        </div>
        <p className="mt-4 text-xs text-subtle">
          Las eras 2001 y 2018 están selladas hasta que un legado alcance Ídolo o Prócer.
        </p>
      </div>
    </div>
  );
}
