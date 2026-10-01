import { type ReactNode } from "react";
import { X } from "lucide-react";
import { AWARD_MAP } from "@/lib/game/awards";
import { STAT_LABEL } from "@/lib/game/constants";
import { formatARS, rankOf, shopPrice } from "@/lib/game/format";
import { availableShop } from "@/lib/game/shop";
import { useGame } from "@/lib/game/store";
import type { StatKey } from "@/lib/game/types";

export function OverlayHost() {
  const state = useGame((s) => s.state);
  const overlay = useGame((s) => s.overlay);
  if (!state) return null;
  return (
    <>
      {state.phase === "award" && state.pendingAwards[0] ? <AwardModal id={state.pendingAwards[0]} /> : null}
      {state.phase === "warning" ? <WarningModal /> : null}
      {state.phase === "election" ? <ElectionModal /> : null}
      {state.phase === "extension" ? <ExtensionModal /> : null}
      {overlay === "shop" ? <ShopSheet /> : null}
      {overlay === "profile" ? <ProfileSheet /> : null}
    </>
  );
}

function Frame({
  children,
  onClose,
  wide,
}: {
  children: ReactNode;
  onClose?: () => void;
  wide?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-navy/70 sm:items-center">
      <div
        role="dialog"
        className={`anim-enter relative max-h-[90dvh] overflow-auto rounded-t-[24px] border border-paper/12 bg-navy-2 p-5 shadow-2xl sm:rounded-[24px] ${wide ? "w-full max-w-3xl" : "w-full max-w-lg"}`}
      >
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-[8px] p-2 text-muted hover:text-paper"
            aria-label="Cerrar"
          >
            <X className="size-4" />
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
}

function AwardModal({ id }: { id: string }) {
  const dismiss = useGame((s) => s.dismissAward);
  const def = AWARD_MAP[id];
  if (!def) return null;
  const effects = Object.entries(def.effects)
    .filter(([, v]) => typeof v === "number" && v !== 0)
    .map(([k, v]) => `${(v as number) > 0 ? "+" : ""}${v} ${STAT_LABEL[k as StatKey] ?? k}`);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 px-4">
      <div className="flag-wash anim-enter w-full max-w-md rounded-[24px] p-[10px]">
        <div className="rounded-[16px] bg-navy px-6 py-8 text-center text-paper">
          <div className="medal-3d mx-auto mb-4 size-28">
            <img
              src={def.image}
              alt=""
              className="size-28 rounded-full object-cover"
              draggable={false}
            />
          </div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-celeste">
            {def.category === "dificil" ? "Galardón difícil" : def.category === "medio" ? "Galardón" : "Obsequio"}
          </p>
          <h2 className="mt-2 font-display text-3xl text-paper">{def.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist">{def.subtitle}</p>
          {effects.length ? (
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-celeste">
              {effects.join(" · ")}
            </p>
          ) : null}
          <button
            type="button"
            onClick={dismiss}
            className="mt-6 h-12 w-full rounded-[8px] bg-paper font-semibold text-navy"
          >
            Registrar en el legado
          </button>
        </div>
      </div>
    </div>
  );
}

function WarningModal() {
  const skip = useGame((s) => s.skipWarning);
  const setOverlay = useGame((s) => s.setOverlay);
  const year = useGame((s) => s.state?.calendarYear ?? 0);
  const modern = year >= 2012;
  return (
    <Frame>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bad">Alerta de comicios</p>
      <h2 className="mt-2 font-display text-3xl">La popularidad no llega</h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        Falta poco para las urnas y el pueblo está tibio. Una campaña de influencia puede
        evitar el balotaje o una derrota seca.{" "}
        {modern
          ? "En esta era, eso son bots y streamers."
          : "En esta era, eso son diarios, radios y televisión."}
      </p>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          onClick={() => {
            skip();
            setOverlay("shop");
          }}
          className="h-12 rounded-[8px] bg-paper font-semibold text-navy"
        >
          Abrir patrimonio y campañas
        </button>
        <button
          type="button"
          onClick={skip}
          className="h-12 rounded-[8px] border border-paper/20 font-medium text-paper"
        >
          Seguir sin gastar
        </button>
      </div>
    </Frame>
  );
}

function ElectionModal() {
  const state = useGame((s) => s.state)!;
  const election = useGame((s) => s.election);
  const kind = state.electionKind;
  if (kind === "lost") {
    return (
      <Frame>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-bad">Comicios</p>
        <h2 className="mt-2 font-display text-3xl">Derrota automática</h2>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          La popularidad está por el piso. Las urnas son un trámite: el recinto ya tiene otro nombre.
        </p>
        <button
          type="button"
          onClick={() => election("standard")}
          className="mt-5 h-12 w-full rounded-[8px] bg-paper font-semibold text-navy"
        >
          Entregar la banda
        </button>
      </Frame>
    );
  }
  const runoff = kind === "runoff";
  return (
    <Frame>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste">
        {runoff ? "Balotaje" : "Elección presidencial"}
      </p>
      <h2 className="mt-2 font-display text-3xl">
        {runoff ? "Nadie sacó lo suficiente" : "El pueblo vota"}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        {runoff
          ? "La popularidad está en el límite. Podés ir al balotaje limpio, ensuciar la campaña o cortar por lo sano."
          : "Los números dan. Aun así, hay quien ofrece atajos."}
      </p>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          onClick={() => election("standard")}
          className="h-12 rounded-[8px] bg-paper font-semibold text-navy"
        >
          {runoff ? "Ir a balotaje estándar (50%)" : "Aceptar el recuento"}
        </button>
        {runoff ? (
          <button
            type="button"
            onClick={() => election("dirty")}
            className="h-12 rounded-[8px] border border-paper/20 font-medium text-paper"
          >
            Campaña sucia (55%) — cuesta pesos y prestigio
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => election("dictatorship")}
          className="h-12 rounded-[8px] border border-bad/40 font-medium text-bad"
        >
          Eliminar a la oposición e instaurar dictadura
        </button>
      </div>
    </Frame>
  );
}

function ExtensionModal() {
  const extension = useGame((s) => s.extension);
  const state = useGame((s) => s.state)!;
  const cost = shopPrice(3_800_000, state.stats.inflation);
  return (
    <Frame>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste">Fin de los dos mandatos</p>
      <h2 className="mt-2 font-display text-3xl">La Constitución o el cuartel</h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        Ocho años. Podés dejar el poder con un legado, comprar una reforma (hace falta influencia y{" "}
        {formatARS(cost)}) o dar un golpe que destroza la imagen del país de forma irreversible.
      </p>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          onClick={() => extension("leave")}
          className="h-12 rounded-[8px] bg-paper font-semibold text-navy"
        >
          Dejar el poder
        </button>
        <button
          type="button"
          onClick={() => extension("reform")}
          className="h-12 rounded-[8px] border border-paper/20 font-medium text-paper"
        >
          Reformar la Constitución
        </button>
        <button
          type="button"
          onClick={() => extension("coup")}
          className="h-12 rounded-[8px] border border-bad/40 font-medium text-bad"
        >
          Golpe de Estado
        </button>
      </div>
    </Frame>
  );
}

function ShopSheet() {
  const state = useGame((s) => s.state)!;
  const buy = useGame((s) => s.buy);
  const loan = useGame((s) => s.loan);
  const setOverlay = useGame((s) => s.setOverlay);
  const toast = useGame((s) => s.toast);
  const items = availableShop(state.calendarYear, state.mandateYear, state.owned);
  const loanBlocked =
    state.marketClosed || state.stats.prestige < 28 || state.stats.image < 22 || state.imageCap <= 20;
  return (
    <Frame wide onClose={() => setOverlay(null)}>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste">Vida personal</p>
      <h2 className="mt-1 font-display text-3xl">Patrimonio</h2>
      <p className="mt-2 text-sm text-mist">
        {formatARS(state.money)} · influencia {Math.round(state.influence)} · inflación{" "}
        {Math.round(state.stats.inflation)}% (encarece cada ítem)
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const price = shopPrice(item.costARS, state.stats.inflation);
          return (
            <div key={item.id} className="flex flex-col rounded-[16px] border border-paper/10 bg-navy p-3">
              <h3 className="font-display text-lg text-paper">{item.name}</h3>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-muted">{item.blurb}</p>
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-celeste">
                {formatARS(price)}
                {item.costInfluence ? ` · inf. ${item.costInfluence}` : ""}
              </p>
              <button
                type="button"
                onClick={() => buy(item.id)}
                className="mt-3 h-10 rounded-[8px] bg-paper text-sm font-semibold text-navy"
              >
                Adquirir
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-[16px] border border-paper/10 bg-navy p-4">
        <h3 className="font-display text-xl">Préstamo soberano</h3>
        <p className="mt-1 text-sm text-muted">
          Pedir crédito alimenta la inflación. Se bloquea si el prestigio es bajo, el mercado está
          cerrado o la imagen del país no sostiene.
        </p>
        <button
          type="button"
          disabled={loanBlocked}
          onClick={loan}
          className="mt-3 h-11 rounded-[8px] bg-celeste px-4 text-sm font-semibold text-navy disabled:opacity-40"
        >
          {loanBlocked ? "Crédito bloqueado" : `Tomar ${formatARS(4_800_000)}`}
        </button>
      </div>
      {toast ? <p className="mt-3 text-sm text-celeste">{toast}</p> : null}
    </Frame>
  );
}

function ProfileSheet() {
  const state = useGame((s) => s.state)!;
  const setOverlay = useGame((s) => s.setOverlay);
  const abandon = useGame((s) => s.abandon);
  const rank = rankOf(state);
  const awards = state.awards.map((a) => AWARD_MAP[a.id]).filter(Boolean);
  return (
    <Frame wide onClose={() => setOverlay(null)}>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-celeste">Legado en curso</p>
      <h2 className="mt-1 font-display text-3xl">{state.leaderName}</h2>
      <p className="mt-2 text-sm text-mist">
        {rank.label} · {state.awards.length} galardones · {state.souvenirs.length} obsequios
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
        {awards.length ? (
          awards.map((a) => (
            <figure key={a.id} className="rounded-[12px] border border-paper/10 bg-navy p-2 text-center">
              <img src={a.image} alt="" className="mx-auto size-14 rounded-full object-cover" />
              <figcaption className="mt-1 text-[0.65rem] leading-tight text-mist">{a.title}</figcaption>
            </figure>
          ))
        ) : (
          <p className="col-span-4 text-sm text-muted">Todavía no hay medallas en esta presidencia.</p>
        )}
      </div>
      <ul className="mt-4 max-h-40 overflow-auto text-sm text-mist">
        {state.periodLog.slice(-8).map((l, i) => (
          <li key={i} className="border-l-2 border-celeste/40 py-1 pl-3">
            <span className="font-mono text-[0.65rem] text-muted">{l.year}</span> {l.log}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={abandon}
        className="mt-5 h-11 rounded-[8px] border border-paper/20 px-4 text-sm text-mist"
      >
        Abandonar y volver al vestíbulo
      </button>
    </Frame>
  );
}
