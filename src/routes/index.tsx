import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UNITS, ALL_MODULES } from "@/lib/taxi-data";
import { ModuleModal } from "@/components/duo/ModuleModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taxi Lingo — Learn French" },
      { name: "description", content: "Gamified French lessons inspired by Le Nouveau Taxi 1." },
      { property: "og:title", content: "Taxi Lingo — Learn French" },
      { property: "og:description", content: "Gamified French lessons inspired by Le Nouveau Taxi 1." },
    ],
  }),
  component: Index,
});

function Index() {
  const [hearts, setHearts] = useState(5);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(1);
  const [completed, setCompleted] = useState<string[]>([]);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const activeModule = ALL_MODULES.find((m) => m.id === activeModuleId) || null;

  const handleLoseHeart = () => {
    setHearts((h) => {
      const next = h - 1;
      if (next <= 0) {
        setGameOver(true);
        setActiveModuleId(null);
      }
      return Math.max(0, next);
    });
  };

  const handleComplete = () => {
    if (activeModule && !completed.includes(activeModule.id)) {
      setCompleted((c) => [...c, activeModule.id]);
      setXp((x) => x + 10);
      setStreak((s) => s + 1);
    }
    setActiveModuleId(null);
  };

  const resetGame = () => {
    setHearts(5);
    setGameOver(false);
  };

  // Color hint per module type
  const moduleTone = (type: string) => {
    switch (type) {
      case "dialogue":
        return "bg-primary text-primary-foreground border-primary shadow-[0_6px_0_var(--primary-shadow)]";
      case "vocab":
        return "bg-xp text-background border-xp shadow-[0_6px_0_var(--border)]";
      case "grammar":
        return "bg-accent text-accent-foreground border-accent shadow-[0_6px_0_var(--border)]";
      case "phrases":
        return "bg-streak text-background border-streak shadow-[0_6px_0_var(--border)]";
      case "quiz":
        return "bg-heart text-background border-heart shadow-[0_6px_0_var(--border)]";
      default:
        return "bg-card text-foreground border-border shadow-[0_6px_0_var(--border)]";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 via-background to-primary/10 flex items-center justify-center p-0 md:p-6">
      <div className="w-full md:max-w-md md:rounded-[3rem] md:border-[12px] md:border-foreground/90 md:shadow-2xl md:overflow-hidden bg-background min-h-screen md:min-h-0 md:h-[860px] flex flex-col relative">
        {/* HUD */}
        <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🇫🇷</span>
            <span className="font-extrabold text-foreground tracking-tight">Taxi Lingo</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold">
            <span className="flex items-center gap-1 text-streak">🔥<span>{streak}</span></span>
            <span className="flex items-center gap-1 text-xp">⚡<span>{xp}</span></span>
            <span className="flex items-center gap-1 text-heart">♥<span>{hearts}</span></span>
          </div>
        </header>

        {/* Path */}
        <main className="flex-1 overflow-y-auto px-4 py-6">
          {UNITS.map((unit) => (
            <section key={unit.unitId} className="mb-10">
              {/* Unit banner */}
              <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-3 mb-6 shadow-[0_4px_0_var(--primary-shadow)]">
                <p className="text-[10px] uppercase tracking-widest opacity-80">Unité {unit.unitId}</p>
                <h2 className="font-extrabold text-lg">{unit.unitTitle}</h2>
              </div>

              {unit.lessons.map((lesson) => {
                const lessonDone = lesson.modules.every((m) => completed.includes(m.id));
                return (
                  <div key={lesson.lessonId} className="mb-8">
                    {/* Lesson section header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm ${
                          lessonDone
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {lesson.lessonId}
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                          Leçon {lesson.lessonId}
                        </p>
                        <h3 className="font-extrabold text-foreground leading-tight">
                          {lesson.lessonTitle}
                        </h3>
                        <p className="text-xs text-muted-foreground">{lesson.theme}</p>
                      </div>
                    </div>

                    {/* Module nodes */}
                    <div className="flex flex-col items-center gap-4">
                      {lesson.modules.map((mod, i) => {
                        const done = completed.includes(mod.id);
                        const offset = [0, 50, 25, -25, -50][i % 5];
                        return (
                          <div
                            key={mod.id}
                            style={{ transform: `translateX(${offset}px)` }}
                            className="flex flex-col items-center"
                          >
                            <button
                              onClick={() => setActiveModuleId(mod.id)}
                              className={`relative w-20 h-20 rounded-full font-extrabold text-2xl flex items-center justify-center border-4 transition-all active:translate-y-1 ${
                                done
                                  ? "bg-accent text-accent-foreground border-accent shadow-[0_6px_0_var(--border)]"
                                  : moduleTone(mod.type)
                              }`}
                              title={mod.title}
                            >
                              {done ? "★" : mod.icon}
                            </button>
                            <p className="mt-2 text-xs font-bold text-center max-w-32 text-foreground">
                              {mod.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </section>
          ))}
          <div className="text-center text-muted-foreground text-xs pt-4 pb-8">
            🎓 Inspired by <em>Le Nouveau Taxi 1</em> — Units 1–3
          </div>
        </main>

        {activeModule && (
          <ModuleModal
            module={activeModule}
            hearts={hearts}
            onClose={() => setActiveModuleId(null)}
            onLoseHeart={handleLoseHeart}
            onComplete={handleComplete}
          />
        )}

        {gameOver && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 animate-fade-in">
            <div className="bg-background rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
              <div className="text-6xl mb-3">💔</div>
              <h2 className="text-2xl font-extrabold text-destructive">Game Over</h2>
              <p className="text-muted-foreground mt-2">You ran out of hearts! Refill and keep going.</p>
              <button
                onClick={resetGame}
                className="mt-6 w-full bg-primary text-primary-foreground font-extrabold uppercase py-4 rounded-2xl shadow-[0_4px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)]"
              >
                Refill hearts
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
