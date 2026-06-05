import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LE_NOUVEAU_TAXI_COMPLETE_DB, ALL_LESSONS } from "@/lib/taxi-data";
import { LessonModal } from "@/components/duo/LessonModal";

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
  const [completed, setCompleted] = useState<number[]>([]);
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const isUnlocked = (lessonId: number) => {
    const idx = ALL_LESSONS.findIndex((l) => l.lessonId === lessonId);
    if (idx === 0) return true;
    const prev = ALL_LESSONS[idx - 1];
    return completed.includes(prev.lessonId);
  };

  const activeLesson = ALL_LESSONS.find((l) => l.lessonId === activeLessonId) || null;

  const handleLoseHeart = () => {
    setHearts((h) => {
      const next = h - 1;
      if (next <= 0) {
        setGameOver(true);
        setActiveLessonId(null);
      }
      return Math.max(0, next);
    });
  };

  const handleComplete = () => {
    if (activeLesson && !completed.includes(activeLesson.lessonId)) {
      setCompleted((c) => [...c, activeLesson.lessonId]);
      setXp((x) => x + 10);
      setStreak((s) => s + 1);
    }
    setActiveLessonId(null);
  };

  const resetGame = () => {
    setHearts(5);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 via-background to-primary/10 flex items-center justify-center p-0 md:p-6">
      {/* Phone frame on desktop */}
      <div className="w-full md:max-w-md md:rounded-[3rem] md:border-[12px] md:border-foreground/90 md:shadow-2xl md:overflow-hidden bg-background min-h-screen md:min-h-0 md:h-[860px] flex flex-col relative">
        {/* HUD */}
        <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl">🇫🇷</span>
            <span className="font-extrabold text-foreground tracking-tight">Taxi</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-extrabold">
            <span className="flex items-center gap-1 text-streak">🔥<span>{streak}</span></span>
            <span className="flex items-center gap-1 text-xp">⚡<span>{xp}</span></span>
            <span className="flex items-center gap-1 text-heart">♥<span>{hearts}</span></span>
          </div>
        </header>

        {/* Path */}
        <main className="flex-1 overflow-y-auto px-4 py-6">
          {LE_NOUVEAU_TAXI_COMPLETE_DB.map((unit) => (
            <section key={unit.unitId} className="mb-8">
              <div className="bg-primary text-primary-foreground rounded-2xl px-4 py-3 mb-6 shadow-[0_4px_0_var(--primary-shadow)]">
                <p className="text-[10px] uppercase tracking-widest opacity-80">Unité {unit.unitId}</p>
                <h2 className="font-extrabold text-lg">{unit.unitTitle.split(":")[1]?.trim() ?? unit.unitTitle}</h2>
              </div>
              <div className="flex flex-col items-center gap-5">
                {unit.lessons.map((lesson, i) => {
                  const unlocked = isUnlocked(lesson.lessonId);
                  const done = completed.includes(lesson.lessonId);
                  const offset = [0, 60, 30, -30, -60, -30, 0][i % 7];
                  return (
                    <div
                      key={lesson.lessonId}
                      style={{ transform: `translateX(${offset}px)` }}
                      className="flex flex-col items-center"
                    >
                      <button
                        disabled={!unlocked}
                        onClick={() => setActiveLessonId(lesson.lessonId)}
                        className={`relative w-20 h-20 rounded-full font-extrabold text-2xl flex items-center justify-center border-4 transition-all ${
                          done
                            ? "bg-accent text-accent-foreground border-accent shadow-[0_6px_0_var(--border)]"
                            : unlocked
                            ? "bg-primary text-primary-foreground border-primary shadow-[0_6px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)]"
                            : "bg-muted text-muted-foreground border-border shadow-[0_4px_0_var(--border)] cursor-not-allowed"
                        }`}
                      >
                        {done ? "★" : unlocked ? lesson.lessonId : "🔒"}
                      </button>
                      <p className={`mt-2 text-xs font-bold text-center max-w-32 ${unlocked ? "text-foreground" : "text-muted-foreground"}`}>
                        {lesson.lessonTitle.replace(/^Leçon \d+ : /, "")}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
          <div className="text-center text-muted-foreground text-xs pt-4 pb-8">
            🎓 Inspired by <em>Le Nouveau Taxi 1</em>
          </div>
        </main>

        {activeLesson && (
          <LessonModal
            lesson={activeLesson}
            hearts={hearts}
            onClose={() => setActiveLessonId(null)}
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
