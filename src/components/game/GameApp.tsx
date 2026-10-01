import { useEffect } from "react";
import { useGame } from "@/lib/game/store";
import { EndScreen } from "./EndScreen";
import { OverlayHost } from "./Overlays";
import { PlayScreen } from "./PlayScreen";
import { TitleScreen } from "./TitleScreen";

export function GameApp() {
  const hydrated = useGame((s) => s.hydrated);
  const hydrate = useGame((s) => s.hydrate);
  const state = useGame((s) => s.state);
  const clearToast = useGame((s) => s.clearToast);
  const toast = useGame((s) => s.toast);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(clearToast, 3200);
    return () => window.clearTimeout(t);
  }, [toast, clearToast]);

  useEffect(() => {
    const onHide = () => {
      const s = useGame.getState().state;
      if (s) {
        try {
          localStorage.setItem("el-mandato-run-v2", JSON.stringify(s));
        } catch {
          /* ignore */
        }
      }
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onHide);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onHide);
    };
  }, []);

  if (!hydrated || !state || state.phase === "title") return <TitleScreen />;
  if (state.phase === "end") return <EndScreen />;

  return (
    <>
      <PlayScreen />
      <OverlayHost />
      {toast ? (
        <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-[8px] bg-paper px-4 py-2 text-sm font-medium text-navy">
          {toast}
        </div>
      ) : null}
    </>
  );
}
