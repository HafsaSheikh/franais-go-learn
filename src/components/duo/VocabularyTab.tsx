import { useEffect, useMemo, useState } from "react";
import { ALL_VOCAB, type VocabEntry } from "@/lib/taxi-data";

function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

const STORAGE_KEY = "taxi-lingo-user-vocab";

interface UserWord {
  fr: string;
  en: string;
  addedAt: number;
}

function loadUserWords(): UserWord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UserWord[]) : [];
  } catch {
    return [];
  }
}

export function VocabularyTab() {
  const [query, setQuery] = useState("");
  const [userWords, setUserWords] = useState<UserWord[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [draft, setDraft] = useState({ fr: "", en: "" });

  useEffect(() => {
    setUserWords(loadUserWords());
  }, []);

  const persist = (next: UserWord[]) => {
    setUserWords(next);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  };

  const allEntries = useMemo(() => {
    const builtIn: (VocabEntry & { source: "book" })[] = ALL_VOCAB.map((v) => ({
      ...v,
      source: "book" as const,
    }));
    const custom = userWords.map((w) => ({
      fr: w.fr,
      en: w.en,
      unitId: 0,
      lessonId: 0,
      lessonTitle: "My words",
      source: "user" as const,
    }));
    return [...custom, ...builtIn];
  }, [userWords]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allEntries;
    return allEntries.filter(
      (e) => e.fr.toLowerCase().includes(q) || e.en.toLowerCase().includes(q),
    );
  }, [query, allEntries]);

  const handleAdd = () => {
    const fr = draft.fr.trim();
    const en = draft.en.trim();
    if (!fr || !en) return;
    persist([{ fr, en, addedAt: Date.now() }, ...userWords]);
    setDraft({ fr: "", en: "" });
    setShowAdd(false);
    // pronounce immediately to confirm
    speak(fr);
  };

  const handleRemove = (fr: string) => {
    persist(userWords.filter((w) => w.fr !== fr));
  };

  return (
    <div className="px-4 py-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Lexique</p>
          <h2 className="text-2xl font-extrabold text-foreground">Vocabulary</h2>
          <p className="text-xs text-muted-foreground">
            {allEntries.length} words · tap 🔊 to hear pronunciation
          </p>
        </div>
        <button
          onClick={() => setShowAdd((s) => !s)}
          className="bg-primary text-primary-foreground font-extrabold rounded-full w-12 h-12 text-2xl shadow-[0_3px_0_var(--primary-shadow)] active:translate-y-0.5 active:shadow-none"
          aria-label="Add word"
        >
          {showAdd ? "×" : "+"}
        </button>
      </div>

      {showAdd && (
        <div className="mb-4 rounded-2xl border-2 border-primary/40 bg-primary/5 p-4 space-y-3 animate-fade-in">
          <input
            value={draft.fr}
            onChange={(e) => setDraft((d) => ({ ...d, fr: e.target.value }))}
            placeholder="French word (e.g. bonjour)"
            className="w-full p-3 rounded-xl border-2 border-border bg-card font-semibold focus:border-primary outline-none"
          />
          <input
            value={draft.en}
            onChange={(e) => setDraft((d) => ({ ...d, en: e.target.value }))}
            placeholder="English translation"
            className="w-full p-3 rounded-xl border-2 border-border bg-card font-semibold focus:border-primary outline-none"
          />
          <button
            onClick={handleAdd}
            disabled={!draft.fr.trim() || !draft.en.trim()}
            className="w-full bg-primary text-primary-foreground font-extrabold uppercase py-3 rounded-xl shadow-[0_3px_0_var(--primary-shadow)] active:translate-y-0.5 active:shadow-none disabled:opacity-40"
          >
            Save word
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Pronunciation is generated automatically.
          </p>
        </div>
      )}

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search words…"
        className="w-full p-3 mb-4 rounded-xl border-2 border-border bg-card font-semibold focus:border-primary outline-none"
      />

      <div className="space-y-2">
        {filtered.map((entry, i) => (
          <div
            key={`${entry.fr}-${i}`}
            className="flex items-center gap-3 p-3 rounded-2xl border-2 border-border bg-card"
          >
            <button
              onClick={() => speak(entry.fr)}
              className="w-11 h-11 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-lg shrink-0"
              aria-label={`Play ${entry.fr}`}
            >
              🔊
            </button>
            <div className="flex-1 min-w-0">
              <p className="font-extrabold text-foreground truncate">{entry.fr}</p>
              <p className="text-sm text-muted-foreground truncate">{entry.en}</p>
            </div>
            {entry.source === "user" ? (
              <button
                onClick={() => handleRemove(entry.fr)}
                className="text-xs font-bold text-destructive px-2 py-1"
                aria-label="Remove"
              >
                ✕
              </button>
            ) : (
              <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground shrink-0">
                U{entry.unitId}·L{entry.lessonId}
              </span>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-8">No words found.</p>
        )}
      </div>
    </div>
  );
}