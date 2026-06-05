import { useMemo, useState } from "react";
import type { Challenge, Lesson } from "@/lib/taxi-data";

function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

type Stage = "dialogue" | "flashcards" | "grammar" | "quiz" | "complete";
const STAGES: Stage[] = ["dialogue", "flashcards", "grammar", "quiz"];

interface Props {
  lesson: Lesson;
  hearts: number;
  onClose: () => void;
  onLoseHeart: () => void;
  onComplete: () => void;
}

export function LessonModal({ lesson, hearts, onClose, onLoseHeart, onComplete }: Props) {
  const [stage, setStage] = useState<Stage>("dialogue");
  const stageIndex = STAGES.indexOf(stage);
  const [quizIdx, setQuizIdx] = useState(0);
  const totalSteps = STAGES.length + lesson.challenges.length - 1;
  const currentStepNum =
    stage === "quiz" ? STAGES.length - 1 + quizIdx : stageIndex;
  const progressPct = ((currentStepNum + 1) / totalSteps) * 100;

  const advance = () => {
    if (stage === "quiz") {
      if (quizIdx + 1 < lesson.challenges.length) setQuizIdx(quizIdx + 1);
      else setStage("complete");
    } else {
      const next = STAGES[stageIndex + 1];
      if (next) setStage(next);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-background flex flex-col animate-[slide-in-right_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-2xl leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="flex items-center gap-1 font-bold text-heart">
            <span>♥</span>
            <span>{hearts}</span>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {stage === "dialogue" && <DialogueView lesson={lesson} onNext={advance} />}
          {stage === "flashcards" && <FlashcardsView lesson={lesson} onNext={advance} />}
          {stage === "grammar" && <GrammarView lesson={lesson} onNext={advance} />}
          {stage === "quiz" && (
            <QuizView
              key={quizIdx}
              challenge={lesson.challenges[quizIdx]}
              onLoseHeart={onLoseHeart}
              onNext={advance}
            />
          )}
          {stage === "complete" && <CompleteView onDone={onComplete} />}
        </div>
      </div>
    </div>
  );
}

function StepHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs uppercase tracking-wider text-primary font-bold">{kicker}</p>
      <h2 className="text-2xl font-extrabold text-foreground mt-1">{title}</h2>
    </div>
  );
}

function NextButton({ onClick, label = "Continue" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-primary text-primary-foreground font-extrabold uppercase tracking-wide py-4 rounded-2xl shadow-[0_4px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)] transition-all"
    >
      {label}
    </button>
  );
}

function DialogueView({ lesson, onNext }: { lesson: Lesson; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  return (
    <div>
      <StepHeader kicker="Dialogue" title={lesson.lessonTitle} />
      <p className="text-sm text-muted-foreground mb-4">Tap any line to reveal the translation. 🔊 plays audio.</p>
      <div className="space-y-3">
        {lesson.dialogue.map((line, i) => (
          <div key={i} className="bg-card border-2 border-border rounded-2xl p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-primary">{line.speaker}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(line.fr);
                }}
                className="text-lg w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center"
                aria-label="Play audio"
              >
                🔊
              </button>
            </div>
            <button
              onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
              className="w-full text-left"
            >
              <p className="text-foreground font-medium">{line.fr}</p>
              {revealed[i] && (
                <p className="text-muted-foreground text-sm mt-1 italic animate-fade-in">
                  {line.en}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>
      <NextButton onClick={onNext} />
    </div>
  );
}

function FlashcardsView({ lesson, onNext }: { lesson: Lesson; onNext: () => void }) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <div>
      <StepHeader kicker="Flashcards" title="New vocabulary" />
      <p className="text-sm text-muted-foreground mb-4">Tap a card to flip. 🔊 to hear it.</p>
      <div className="grid grid-cols-2 gap-3">
        {lesson.vocabulary.map((w, i) => {
          const f = flipped[i];
          return (
            <button
              key={i}
              onClick={() => setFlipped((r) => ({ ...r, [i]: !r[i] }))}
              className={`relative aspect-square rounded-2xl border-2 p-3 flex flex-col items-center justify-center text-center transition-all shadow-[0_3px_0_var(--border)] active:translate-y-0.5 active:shadow-none ${
                f ? "bg-accent border-accent text-accent-foreground" : "bg-card border-border"
              }`}
            >
              <p className="font-extrabold text-base">{f ? w.en : w.fr}</p>
              <span
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speak(w.fr);
                }}
                className="absolute top-2 right-2 text-sm w-7 h-7 rounded-full bg-background/80 flex items-center justify-center"
              >
                🔊
              </span>
            </button>
          );
        })}
      </div>
      <NextButton onClick={onNext} />
    </div>
  );
}

function GrammarView({ lesson, onNext }: { lesson: Lesson; onNext: () => void }) {
  return (
    <div>
      <StepHeader kicker="Grammar spotlight" title={lesson.grammar.title} />
      <div className="bg-accent/40 border-2 border-accent rounded-2xl p-4">
        <p className="text-foreground">{lesson.grammar.explanation}</p>
        <ul className="mt-4 space-y-2">
          {lesson.grammar.rules.map((r, i) => (
            <li
              key={i}
              className="bg-card border border-border rounded-xl p-3 font-mono text-sm"
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
      <NextButton onClick={onNext} label="Start quiz" />
    </div>
  );
}

function QuizView({
  challenge,
  onLoseHeart,
  onNext,
}: {
  challenge: Challenge;
  onLoseHeart: () => void;
  onNext: () => void;
}) {
  const [answer, setAnswer] = useState<string | string[]>(
    challenge.type === "word-bank" ? [] : "",
  );
  const [result, setResult] = useState<null | { ok: boolean; correct: string }>(null);

  const check = () => {
    let ok = false;
    let correctStr = "";
    if (challenge.type === "multiple-choice") {
      ok = answer === challenge.correct;
      correctStr = challenge.correct;
    } else if (challenge.type === "fill-blank") {
      ok =
        typeof answer === "string" &&
        answer.trim().toLowerCase() === challenge.blank.toLowerCase();
      correctStr = challenge.blank;
    } else {
      const a = answer as string[];
      ok =
        a.length === challenge.correctOrder.length &&
        a.every((t, i) => t === challenge.correctOrder[i]);
      correctStr = challenge.correctOrder.join(" ");
    }
    setResult({ ok, correct: correctStr });
    if (!ok) onLoseHeart();
  };

  return (
    <div className="pb-32">
      <StepHeader kicker="Quiz" title={challenge.question} />

      {challenge.type === "multiple-choice" && (
        <div className="space-y-3">
          {challenge.options.map((opt) => {
            const sel = answer === opt;
            return (
              <button
                key={opt}
                disabled={!!result}
                onClick={() => setAnswer(opt)}
                className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all shadow-[0_3px_0_var(--border)] active:translate-y-0.5 active:shadow-none ${
                  sel
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-card"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {challenge.type === "fill-blank" && (
        <input
          autoFocus
          disabled={!!result}
          value={answer as string}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer…"
          className="w-full p-4 rounded-2xl border-2 border-border bg-card text-lg font-semibold focus:border-primary outline-none"
        />
      )}

      {challenge.type === "word-bank" && (
        <WordBank
          tokens={challenge.tokens}
          selected={answer as string[]}
          disabled={!!result}
          onChange={(next) => setAnswer(next)}
        />
      )}

      {/* Footer validation slate */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-background border-t border-border">
        {result ? (
          <div
            className={`rounded-2xl p-4 mb-3 ${
              result.ok
                ? "bg-primary/15 text-primary"
                : "bg-destructive/15 text-destructive"
            }`}
          >
            <p className="font-extrabold">
              {result.ok ? "✓ Excellent !" : "✗ Pas tout à fait"}
            </p>
            {!result.ok && (
              <p className="text-sm mt-1 text-foreground">
                Correct answer: <span className="font-bold">{result.correct}</span>
              </p>
            )}
          </div>
        ) : null}
        {result ? (
          <button
            onClick={onNext}
            className={`w-full font-extrabold uppercase tracking-wide py-4 rounded-2xl shadow-[0_4px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)] transition-all ${
              result.ok
                ? "bg-primary text-primary-foreground"
                : "bg-destructive text-destructive-foreground"
            }`}
          >
            Continue
          </button>
        ) : (
          <button
            onClick={check}
            disabled={
              (challenge.type === "word-bank" && (answer as string[]).length === 0) ||
              (challenge.type !== "word-bank" && !answer)
            }
            className="w-full bg-primary text-primary-foreground font-extrabold uppercase tracking-wide py-4 rounded-2xl shadow-[0_4px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)] transition-all disabled:opacity-40 disabled:shadow-none"
          >
            Check
          </button>
        )}
      </div>
    </div>
  );
}

function WordBank({
  tokens,
  selected,
  disabled,
  onChange,
}: {
  tokens: string[];
  selected: string[];
  disabled: boolean;
  onChange: (n: string[]) => void;
}) {
  // each token instance is uniquely indexed
  const tokenList = useMemo(() => tokens.map((t, i) => ({ t, i })), [tokens]);
  const usedIdx = useMemo(() => {
    // selected stores "token::idx" pairs to allow duplicates
    return new Set(selected.map((s) => s.split("::")[1]));
  }, [selected]);

  const display = (s: string) => s.split("::")[0];

  return (
    <div>
      <div className="min-h-24 p-3 mb-4 rounded-2xl border-2 border-dashed border-border bg-card flex flex-wrap gap-2">
        {selected.length === 0 && (
          <span className="text-muted-foreground text-sm self-center">
            Tap words below…
          </span>
        )}
        {selected.map((s, i) => (
          <button
            key={i}
            disabled={disabled}
            onClick={() => onChange(selected.filter((_, j) => j !== i))}
            className="px-3 py-2 bg-accent text-accent-foreground rounded-xl font-bold border-2 border-border shadow-[0_2px_0_var(--border)]"
          >
            {display(s)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {tokenList.map(({ t, i }) => {
          const used = usedIdx.has(String(i));
          return (
            <button
              key={i}
              disabled={disabled || used}
              onClick={() => onChange([...selected, `${t}::${i}`])}
              className={`px-3 py-2 rounded-xl font-bold border-2 transition-all ${
                used
                  ? "bg-muted text-muted-foreground border-border opacity-40"
                  : "bg-card border-border shadow-[0_3px_0_var(--border)] active:translate-y-0.5 active:shadow-none"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CompleteView({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
      <div className="text-7xl mb-4 animate-[scale-in_0.4s_ease-out]">🎉</div>
      <h2 className="text-3xl font-extrabold text-primary">Leçon terminée !</h2>
      <p className="text-muted-foreground mt-2">+10 XP earned. Streak bumped 🔥</p>
      <NextButton onClick={onDone} label="Claim rewards" />
    </div>
  );
}