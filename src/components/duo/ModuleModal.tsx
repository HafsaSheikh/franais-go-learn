import { useMemo, useState } from "react";
import type { Challenge, LessonModule } from "@/lib/taxi-data";
import type { GenderPair } from "@/lib/taxi-gender";

function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''`]/g, "'")
    .trim()
    .toLowerCase();

interface Props {
  module: LessonModule;
  hearts: number;
  onClose: () => void;
  onLoseHeart: () => void;
  onComplete: () => void;
}

export function ModuleModal({ module, hearts, onClose, onLoseHeart, onComplete }: Props) {
  // build a linear sequence of "screens" per module type
  const screens = useMemo(() => buildScreens(module), [module]);
  const [idx, setIdx] = useState(0);
  const total = screens.length;
  const progress = ((idx + 1) / total) * 100;

  const advance = () => {
    if (idx + 1 < total) setIdx(idx + 1);
    else onComplete();
  };

  const current = screens[idx];

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-background flex flex-col animate-[slide-in-right_0.3s_ease-out]">
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
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center gap-1 font-bold text-heart">
            <span>♥</span>
            <span>{hearts}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {current.kind === "dialogue" && (
            <DialogueScreen lines={current.lines} culture={current.culture} onNext={advance} />
          )}
          {current.kind === "vocab" && (
            <VocabScreen moduleId={module.id} pairs={current.pairs} onNext={advance} />
          )}
          {current.kind === "grammar" && (
            <GrammarScreen blocks={current.blocks} onNext={advance} />
          )}
          {current.kind === "phrases" && (
            <PhrasesScreen pairs={current.pairs} onNext={advance} />
          )}
          {current.kind === "gender" && (
            <GenderScreen pairs={current.pairs} onNext={advance} />
          )}
          {current.kind === "quiz" && (
            <QuizScreen
              key={idx}
              challenge={current.challenge}
              onLoseHeart={onLoseHeart}
              onNext={advance}
            />
          )}
          {current.kind === "complete" && <CompleteScreen onDone={advance} title={module.title} />}
        </div>
      </div>
    </div>
  );
}

// ----- Screen builder -----
type Screen =
  | { kind: "dialogue"; lines: NonNullable<LessonModule["dialogue"]>; culture?: string }
  | { kind: "vocab"; pairs: NonNullable<LessonModule["vocabulary"]> }
  | { kind: "grammar"; blocks: NonNullable<LessonModule["grammar"]> }
  | { kind: "phrases"; pairs: NonNullable<LessonModule["phrases"]> }
  | { kind: "gender"; pairs: GenderPair[] }
  | { kind: "quiz"; challenge: Challenge }
  | { kind: "complete" };

function buildScreens(m: LessonModule): Screen[] {
  const s: Screen[] = [];
  if (m.type === "dialogue" && m.dialogue) {
    s.push({ kind: "dialogue", lines: m.dialogue, culture: m.culture });
  }
  if (m.type === "vocab" && m.vocabulary) {
    s.push({ kind: "vocab", pairs: m.vocabulary });
  }
  if (m.type === "grammar" && m.grammar) {
    s.push({ kind: "grammar", blocks: m.grammar });
  }
  if (m.type === "phrases" && m.phrases) {
    s.push({ kind: "phrases", pairs: m.phrases });
  }
  if (m.type === "gender" && m.genderPairs) {
    s.push({ kind: "gender", pairs: m.genderPairs });
  }
  if (m.exercises && m.exercises.length > 0) {
    m.exercises.forEach((c) => s.push({ kind: "quiz", challenge: c }));
  }
  s.push({ kind: "complete" });
  return s;
}

function Header({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs uppercase tracking-wider text-primary font-bold">{kicker}</p>
      <h2 className="text-2xl font-extrabold text-foreground mt-1">{title}</h2>
    </div>
  );
}

function NextBtn({ onClick, label = "Continue" }: { onClick: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-6 bg-primary text-primary-foreground font-extrabold uppercase tracking-wide py-4 rounded-2xl shadow-[0_4px_0_var(--primary-shadow)] active:translate-y-1 active:shadow-[0_0_0_var(--primary-shadow)] transition-all"
    >
      {label}
    </button>
  );
}

function DialogueScreen({
  lines,
  culture,
  onNext,
}: {
  lines: NonNullable<LessonModule["dialogue"]>;
  culture?: string;
  onNext: () => void;
}) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  return (
    <div>
      <Header kicker="Dialogue" title="Listen & read" />
      <p className="text-sm text-muted-foreground mb-4">Tap a line to reveal the translation. 🔊 plays audio.</p>
      <div className="space-y-3">
        {lines.map((line, i) => (
          <div key={i} className="bg-card border-2 border-border rounded-2xl p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-primary">{line.speaker}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(line.fr);
                }}
                className="text-lg w-8 h-8 rounded-full bg-muted hover:bg-accent flex items-center justify-center"
              >
                🔊
              </button>
            </div>
            <button onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))} className="w-full text-left">
              <p className="text-foreground font-medium">{line.fr}</p>
              {revealed[i] && (
                <p className="text-muted-foreground text-sm mt-1 italic animate-fade-in">{line.en}</p>
              )}
            </button>
          </div>
        ))}
      </div>
      {culture && (
        <div className="mt-5 bg-accent/30 border border-accent rounded-2xl p-4">
          <p className="text-xs uppercase tracking-wider text-accent-foreground font-bold mb-1">Culture note</p>
          <p className="text-sm text-foreground">{culture}</p>
        </div>
      )}
      <NextBtn onClick={onNext} />
    </div>
  );
}

function VocabScreen({
  moduleId,
  pairs,
  onNext,
}: {
  moduleId: string;
  pairs: NonNullable<LessonModule["vocabulary"]>;
  onNext: () => void;
}) {
  const storageKey = `taxi:custom-vocab:${moduleId}`;
  const [custom, setCustom] = useState<{ fr: string; en: string }[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
      return [];
    }
  });
  const [adding, setAdding] = useState(false);
  const [fr, setFr] = useState("");
  const [en, setEn] = useState("");
  const allPairs = useMemo(() => [...pairs, ...custom], [pairs, custom]);

  const save = (next: { fr: string; en: string }[]) => {
    setCustom(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  };
  const addWord = () => {
    const f = fr.trim();
    const e = en.trim();
    if (!f || !e) return;
    save([...custom, { fr: f.slice(0, 60), en: e.slice(0, 80) }]);
    setFr("");
    setEn("");
    setAdding(false);
  };
  const removeCustom = (i: number) => save(custom.filter((_, j) => j !== i));

  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <div>
      <Header kicker="Vocabulary" title="Tap to flip" />
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          {allPairs.length} words{custom.length > 0 ? ` (${custom.length} yours)` : ""}.
        </p>
        <button
          onClick={() => setAdding((a) => !a)}
          className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow-[0_2px_0_var(--primary-shadow)] active:translate-y-0.5 active:shadow-none"
        >
          {adding ? "Cancel" : "+ Add word"}
        </button>
      </div>
      {adding && (
        <div className="mb-4 p-3 bg-accent/30 border-2 border-accent rounded-2xl space-y-2 animate-fade-in">
          <input
            autoFocus
            value={fr}
            onChange={(e) => setFr(e.target.value)}
            placeholder="French word (e.g. bonjour)"
            maxLength={60}
            className="w-full p-2 rounded-xl border-2 border-border bg-card text-sm font-semibold focus:border-primary outline-none"
          />
          <input
            value={en}
            onChange={(e) => setEn(e.target.value)}
            placeholder="English translation"
            maxLength={80}
            onKeyDown={(e) => e.key === "Enter" && addWord()}
            className="w-full p-2 rounded-xl border-2 border-border bg-card text-sm font-semibold focus:border-primary outline-none"
          />
          <button
            onClick={addWord}
            disabled={!fr.trim() || !en.trim()}
            className="w-full py-2 rounded-xl bg-primary text-primary-foreground font-bold uppercase text-xs tracking-wide disabled:opacity-40"
          >
            Save word
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {allPairs.map((w, i) => {
          const f = flipped[i];
          const isCustom = i >= pairs.length;
          const customIdx = i - pairs.length;
          return (
            <button
              key={i}
              onClick={() => setFlipped((r) => ({ ...r, [i]: !r[i] }))}
              className={`relative aspect-square rounded-2xl border-2 p-3 flex flex-col items-center justify-center text-center transition-all shadow-[0_3px_0_var(--border)] active:translate-y-0.5 active:shadow-none ${
                f ? "bg-accent border-accent text-accent-foreground" : "bg-card border-border"
              } ${isCustom ? "ring-2 ring-primary/40" : ""}`}
            >
              <p className="font-extrabold text-sm">{f ? w.en : w.fr}</p>
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
              {isCustom && (
                <span
                  role="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCustom(customIdx);
                  }}
                  className="absolute top-2 left-2 text-xs w-6 h-6 rounded-full bg-destructive/80 text-destructive-foreground flex items-center justify-center"
                  title="Remove"
                >
                  ✕
                </span>
              )}
            </button>
          );
        })}
      </div>
      <NextBtn onClick={onNext} label="Start practice" />
    </div>
  );
}

function GrammarScreen({
  blocks,
  onNext,
}: {
  blocks: NonNullable<LessonModule["grammar"]>;
  onNext: () => void;
}) {
  return (
    <div>
      <Header kicker="Grammar" title="Spotlight" />
      <div className="space-y-4">
        {blocks.map((g, i) => (
          <div key={i} className="bg-accent/40 border-2 border-accent rounded-2xl p-4">
            <h3 className="font-extrabold text-foreground mb-1">{g.title}</h3>
            <p className="text-foreground text-sm">{g.explanation}</p>
            <ul className="mt-3 space-y-2">
              {g.rules.map((r, j) => (
                <li key={j} className="bg-card border border-border rounded-xl p-3 font-mono text-xs">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <NextBtn onClick={onNext} label="Start practice" />
    </div>
  );
}

function PhrasesScreen({
  pairs,
  onNext,
}: {
  pairs: NonNullable<LessonModule["phrases"]>;
  onNext: () => void;
}) {
  return (
    <div>
      <Header kicker="Key phrases" title="Useful expressions" />
      <div className="space-y-3">
        {pairs.map((p, i) => (
          <div key={i} className="bg-card border-2 border-border rounded-2xl p-3 flex items-center justify-between">
            <div className="flex-1">
              <p className="font-bold text-foreground">{p.fr}</p>
              <p className="text-sm text-muted-foreground">{p.en}</p>
            </div>
            <button
              onClick={() => speak(p.fr)}
              className="text-lg w-9 h-9 rounded-full bg-muted hover:bg-accent flex items-center justify-center"
            >
              🔊
            </button>
          </div>
        ))}
      </div>
      <NextBtn onClick={onNext} label="Start practice" />
    </div>
  );
}

function QuizScreen({
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
      ok = typeof answer === "string" && normalize(answer) === normalize(challenge.blank);
      correctStr = challenge.blank;
    } else {
      const a = (answer as string[]).map((s) => s.split("::")[0]);
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
      <Header kicker="Practice" title={challenge.question} />

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
                  sel ? "border-primary bg-primary/10 text-foreground" : "border-border bg-card"
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

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-background border-t border-border">
        {result ? (
          <div
            className={`rounded-2xl p-4 mb-3 ${
              result.ok ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"
            }`}
          >
            <p className="font-extrabold">{result.ok ? "✓ Excellent !" : "✗ Pas tout à fait"}</p>
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
            className={`w-full font-extrabold uppercase tracking-wide py-4 rounded-2xl active:translate-y-1 transition-all ${
              result.ok
                ? "bg-primary text-primary-foreground shadow-[0_4px_0_var(--primary-shadow)] active:shadow-[0_0_0_var(--primary-shadow)]"
                : "bg-destructive text-destructive-foreground shadow-[0_4px_0_var(--destructive-shadow)] active:shadow-[0_0_0_var(--destructive-shadow)]"
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
  const tokenList = useMemo(() => tokens.map((t, i) => ({ t, i })), [tokens]);
  const usedIdx = useMemo(() => new Set(selected.map((s) => s.split("::")[1])), [selected]);
  const display = (s: string) => s.split("::")[0];
  return (
    <div>
      <div className="min-h-24 p-3 mb-4 rounded-2xl border-2 border-dashed border-border bg-card flex flex-wrap gap-2">
        {selected.length === 0 && (
          <span className="text-muted-foreground text-sm self-center">Tap words below…</span>
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

function CompleteScreen({ onDone, title }: { onDone: () => void; title: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
      <div className="text-7xl mb-4 animate-[scale-in_0.4s_ease-out]">🎉</div>
      <h2 className="text-3xl font-extrabold text-primary">{title} done!</h2>
      <p className="text-muted-foreground mt-2">+10 XP earned. Streak bumped 🔥</p>
      <NextBtn onClick={onDone} label="Claim rewards" />
    </div>
  );
}

function GenderScreen({
  pairs,
  onNext,
}: {
  pairs: GenderPair[];
  onNext: () => void;
}) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <div>
      <Header kicker="Gender" title="Masculine ↔ Feminine" />
      <p className="text-sm text-muted-foreground mb-4">
        Tap a card to flip between <span className="font-bold text-primary">le masculin</span> and{" "}
        <span className="font-bold" style={{ color: "hsl(330 80% 55%)" }}>la féminin</span>. 🔊 plays the French.
      </p>
      <div className="space-y-3">
        {pairs.map((p, i) => {
          const showFem = flipped[i];
          const word = showFem ? p.f : p.m;
          return (
            <button
              key={i}
              onClick={() => setFlipped((r) => ({ ...r, [i]: !r[i] }))}
              className={`w-full text-left rounded-2xl border-2 p-4 transition-all shadow-[0_3px_0_var(--border)] active:translate-y-0.5 active:shadow-none ${
                showFem
                  ? "border-pink-300 bg-pink-50 dark:bg-pink-950/30"
                  : "border-sky-300 bg-sky-50 dark:bg-sky-950/30"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        showFem ? "bg-pink-500 text-white" : "bg-sky-500 text-white"
                      }`}
                    >
                      {showFem ? "Féminin ♀" : "Masculin ♂"}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      {p.kind === "noun" ? "Noun" : "Adjective"}
                    </span>
                  </div>
                  <p className="font-extrabold text-lg text-foreground">{word}</p>
                  <p className="text-xs text-muted-foreground italic mt-0.5">{p.en}</p>
                  <p className="text-[11px] text-muted-foreground/80 mt-1">
                    ↔ {showFem ? p.m : p.f}
                  </p>
                </div>
                <span
                  role="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(word);
                  }}
                  className="text-lg w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center shrink-0"
                >
                  🔊
                </span>
              </div>
            </button>
          );
        })}
      </div>
      <NextBtn onClick={onNext} label="Start practice" />
    </div>
  );
}
