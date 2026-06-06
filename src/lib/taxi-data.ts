// Re-exports + module generation from raw content.
import { TAXI_UNITS } from "./taxi-content";

export type Challenge =
  | { type: "multiple-choice"; question: string; options: string[]; correct: string }
  | { type: "fill-blank"; question: string; blank: string }
  | { type: "word-bank"; question: string; tokens: string[]; correctOrder: string[] }
  | { type: "spelling"; question: string; answer: string; hint?: string };

export interface DialogueLine { speaker: string; fr: string; en: string }
export interface VocabPair { fr: string; en: string }
export interface GrammarBlock { title: string; explanation: string; rules: string[] }

export type ModuleType = "dialogue" | "vocab" | "grammar" | "phrases" | "quiz";

export interface LessonModule {
  id: string;            // e.g. "1-1-vocab"
  unitId: number;
  lessonId: number;
  type: ModuleType;
  title: string;
  icon: string;
  // payloads (only one or two are filled depending on type)
  dialogue?: DialogueLine[];
  vocabulary?: VocabPair[];
  grammar?: GrammarBlock[];
  phrases?: VocabPair[];
  culture?: string;
  exercises?: Challenge[];
}

export interface Lesson {
  lessonId: number;
  lessonTitle: string;
  theme: string;
  modules: LessonModule[];
}

export interface Unit {
  unitId: number;
  unitTitle: string;
  lessons: Lesson[];
}

// ---------- helpers ----------
const rng = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

function pickDistractors<T>(pool: T[], exclude: T, n: number, rand: () => number): T[] {
  const filtered = pool.filter((x) => x !== exclude);
  const shuffled = [...filtered].sort(() => rand() - 0.5);
  return shuffled.slice(0, n);
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  return [...arr].sort(() => rand() - 0.5);
}

// Spelling challenge: prompt EN, user types FR
function spellingChallenge(pair: VocabPair): Challenge {
  return {
    type: "spelling",
    question: `Spell in French: "${pair.en}"`,
    answer: pair.fr,
    hint: pair.en,
  };
}

// build vocab MC: show FR, pick EN translation
function vocabMC(pair: VocabPair, pool: VocabPair[], rand: () => number): Challenge {
  const distractors = pickDistractors(pool, pair, 3, rand).map((p) => p.en);
  const options = shuffle([pair.en, ...distractors], rand);
  return {
    type: "multiple-choice",
    question: `What does "${pair.fr}" mean?`,
    options,
    correct: pair.en,
  };
}

// reverse: show EN, pick FR
function vocabReverseMC(pair: VocabPair, pool: VocabPair[], rand: () => number): Challenge {
  const distractors = pickDistractors(pool, pair, 3, rand).map((p) => p.fr);
  const options = shuffle([pair.fr, ...distractors], rand);
  return {
    type: "multiple-choice",
    question: `Which is "${pair.en}" in French?`,
    options,
    correct: pair.fr,
  };
}

// phrase → fill-blank: remove one significant word
function phraseFillBlank(phrase: VocabPair): Challenge {
  const words = phrase.fr.split(/\s+/);
  // pick a non-trivial word (length > 2), avoid the first
  let idx = -1;
  for (let i = words.length - 1; i >= 1; i--) {
    const w = words[i].replace(/[.,!?;:'']/g, "");
    if (w.length > 2) {
      idx = i;
      break;
    }
  }
  if (idx === -1) idx = words.length - 1;
  const target = words[idx].replace(/[.,!?;]$/, "");
  const punct = words[idx].slice(target.length);
  const masked = words.map((w, i) => (i === idx ? `___${punct}` : w)).join(" ");
  return {
    type: "fill-blank",
    question: `Fill in the blank: "${masked}" — ${phrase.en}`,
    blank: target,
  };
}

// phrase → word-bank
function phraseWordBank(phrase: VocabPair, pool: VocabPair[], rand: () => number): Challenge {
  const tokens = phrase.fr.replace(/[.,!?;]/g, "").split(/\s+/).filter(Boolean);
  // add 2-3 distractor tokens from other phrases
  const extras: string[] = [];
  for (const p of shuffle(pool, rand)) {
    if (extras.length >= 3) break;
    const tks = p.fr.replace(/[.,!?;]/g, "").split(/\s+/);
    for (const t of tks) {
      if (!tokens.includes(t) && !extras.includes(t) && t.length > 1) {
        extras.push(t);
        break;
      }
    }
  }
  return {
    type: "word-bank",
    question: `Translate: "${phrase.en}"`,
    tokens: shuffle([...tokens, ...extras], rand),
    correctOrder: tokens,
  };
}

// grammar MC from rule examples
function grammarMC(rule: string, otherRules: string[], rand: () => number): Challenge | null {
  // try to split "X → Y" or "X: Y" or "X = Y"
  const parts = rule.split(/[→=:]/);
  if (parts.length < 2) return null;
  const prompt = parts[0].trim();
  const answer = parts.slice(1).join(":").trim();
  if (!prompt || !answer || answer.length > 60) return null;
  const distractors = pickDistractors(otherRules, rule, 3, rand)
    .map((r) => {
      const p = r.split(/[→=:]/);
      return p.length >= 2 ? p.slice(1).join(":").trim() : r;
    })
    .filter((x) => x && x !== answer);
  while (distractors.length < 3) distractors.push("—");
  const options = shuffle([answer, ...distractors.slice(0, 3)], rand);
  return {
    type: "multiple-choice",
    question: `Grammar: ${prompt} ?`,
    options,
    correct: answer,
  };
}

// ---------- module builder ----------
type RawLesson = (typeof TAXI_UNITS)[number]["lessons"][number];

function buildModules(unitId: number, raw: RawLesson): LessonModule[] {
  const lessonId = raw.lessonId;
  const idPrefix = `${unitId}-${lessonId}`;
  const rand = rng(unitId * 100 + lessonId);

  const vocab = raw.vocabulary as unknown as VocabPair[];
  const phrases = raw.phrases as unknown as VocabPair[];
  const grammar = raw.grammar as unknown as GrammarBlock[];

  // VOCAB MODULE: flashcards + 5 quiz items
  const vocabQuiz: Challenge[] = [];
  const sampleV = shuffle(vocab, rand).slice(0, 5);
  sampleV.forEach((p, i) =>
    vocabQuiz.push(i % 2 === 0 ? vocabMC(p, vocab, rand) : vocabReverseMC(p, vocab, rand)),
  );
  // + 3 spelling drills
  shuffle(vocab, rand)
    .slice(0, 3)
    .forEach((p) => vocabQuiz.push(spellingChallenge(p)));

  // GRAMMAR MODULE: lecture + auto MC from rules
  const grammarQuiz: Challenge[] = [];
  const allRules = grammar.flatMap((g) => g.rules);
  for (const r of shuffle(allRules, rand)) {
    if (grammarQuiz.length >= 4) break;
    const q = grammarMC(r, allRules, rand);
    if (q) grammarQuiz.push(q);
  }

  // PHRASES MODULE: flashcards + fill-blank / word-bank
  const phraseQuiz: Challenge[] = [];
  const sampleP = shuffle(phrases, rand).slice(0, 5);
  sampleP.forEach((p, i) =>
    phraseQuiz.push(i % 2 === 0 ? phraseFillBlank(p) : phraseWordBank(p, phrases, rand)),
  );

  // MASTERY QUIZ: 8 mixed items
  const masteryQuiz: Challenge[] = [];
  const mv = shuffle(vocab, rand).slice(0, 4);
  mv.forEach((p, i) =>
    masteryQuiz.push(i % 2 === 0 ? vocabMC(p, vocab, rand) : vocabReverseMC(p, vocab, rand)),
  );
  const mp = shuffle(phrases, rand).slice(0, 4);
  mp.forEach((p, i) =>
    masteryQuiz.push(i % 2 === 0 ? phraseFillBlank(p) : phraseWordBank(p, phrases, rand)),
  );
  // spice with 2 spelling
  shuffle(vocab, rand).slice(0, 2).forEach((p) => masteryQuiz.push(spellingChallenge(p)));
  // workbook-inspired extras for this lesson, if any
  const extras = WORKBOOK_EXTRAS[`${unitId}-${lessonId}`] ?? [];
  masteryQuiz.push(...extras);

  return [
    {
      id: `${idPrefix}-dialogue`,
      unitId,
      lessonId,
      type: "dialogue",
      title: "Dialogue",
      icon: "💬",
      dialogue: raw.dialogue as unknown as DialogueLine[],
      culture: raw.culture,
    },
    {
      id: `${idPrefix}-vocab`,
      unitId,
      lessonId,
      type: "vocab",
      title: "Vocabulary",
      icon: "📚",
      vocabulary: vocab,
      exercises: vocabQuiz,
    },
    {
      id: `${idPrefix}-grammar`,
      unitId,
      lessonId,
      type: "grammar",
      title: "Grammar",
      icon: "✍️",
      grammar,
      exercises: grammarQuiz,
    },
    {
      id: `${idPrefix}-phrases`,
      unitId,
      lessonId,
      type: "phrases",
      title: "Key phrases",
      icon: "🗣️",
      phrases,
      exercises: phraseQuiz,
    },
    {
      id: `${idPrefix}-quiz`,
      unitId,
      lessonId,
      type: "quiz",
      title: "Mastery quiz",
      icon: "🏆",
      exercises: shuffle(masteryQuiz, rand),
    },
  ];
}

export const UNITS: Unit[] = TAXI_UNITS.map((u) => ({
  unitId: u.unitId,
  unitTitle: u.unitTitle,
  lessons: u.lessons.map((l) => ({
    lessonId: l.lessonId,
    lessonTitle: l.lessonTitle,
    theme: l.theme,
    modules: buildModules(u.unitId, l),
  })),
}));

export const ALL_MODULES: LessonModule[] = UNITS.flatMap((u) =>
  u.lessons.flatMap((l) => l.modules),
);

// Legacy export (some old imports may exist)
export const LE_NOUVEAU_TAXI_COMPLETE_DB = UNITS;
export const ALL_LESSONS = UNITS.flatMap((u) => u.lessons);

// Flat vocabulary list (used by the Vocabulary tab)
export interface VocabEntry extends VocabPair {
  unitId: number;
  lessonId: number;
  lessonTitle: string;
}
export const ALL_VOCAB: VocabEntry[] = UNITS.flatMap((u) =>
  u.lessons.flatMap((l) => {
    const vocabMod = l.modules.find((m) => m.type === "vocab");
    return (vocabMod?.vocabulary ?? []).map((v) => ({
      ...v,
      unitId: u.unitId,
      lessonId: l.lessonId,
      lessonTitle: l.lessonTitle,
    }));
  }),
);

// Workbook-inspired extra challenges (Cahier d'exercices style) per lesson.
// Adapted A1 drills — masculine/feminine, être/avoir, possessives, nationalities.
const WORKBOOK_EXTRAS: Record<string, Challenge[]> = {
  "1-1": [
    {
      type: "multiple-choice",
      question: "Masculine form of 'française'?",
      options: ["française", "français", "francaise", "francais"],
      correct: "français",
    },
    {
      type: "fill-blank",
      question: "Il s'appelle Alberto. Il est ___ . (Italian)",
      blank: "italien",
    },
    {
      type: "multiple-choice",
      question: "Choose the correct pronoun: ___ êtes monsieur Durand ?",
      options: ["Tu", "Vous", "Je", "Il"],
      correct: "Vous",
    },
    {
      type: "word-bank",
      question: "Arrange: 'My name is Pauline Latour.'",
      tokens: ["Je", "m'appelle", "Pauline", "Latour", "vous", "suis"],
      correctOrder: ["Je", "m'appelle", "Pauline", "Latour"],
    },
  ],
  "1-2": [
    {
      type: "multiple-choice",
      question: "Which word is the odd one out? (intrus)",
      options: ["autrichienne", "polonaise", "japonaise", "assistante"],
      correct: "assistante",
    },
    {
      type: "fill-blank",
      question: "___ professeur d'allemand est une femme. (le / la / l')",
      blank: "Le",
    },
    {
      type: "fill-blank",
      question: "Tokyo est ___ Japon.",
      blank: "au",
    },
    {
      type: "multiple-choice",
      question: "Masculine of 'la directrice commerciale' ?",
      options: [
        "le directeur commercial",
        "le directrice commercial",
        "la directeur commerciale",
        "le directeur commerciale",
      ],
      correct: "le directeur commercial",
    },
  ],
  "1-3": [
    {
      type: "fill-blank",
      question: "Quel ___ as-tu ? — J'ai 24 ans.",
      blank: "âge",
    },
    {
      type: "multiple-choice",
      question: "Anne ? Elle est dans ___ chambre.",
      options: ["son", "sa", "ses", "mon"],
      correct: "sa",
    },
    {
      type: "fill-blank",
      question: "Comment ___ Luis ? — Ça va. (aller)",
      blank: "va",
    },
    {
      type: "spelling",
      question: "Write the number in letters: 23",
      answer: "vingt-trois",
      hint: "23",
    },
  ],
  "1-4": [
    {
      type: "fill-blank",
      question: "Add accents: J'habite a Berne en Suisse → J'habite ___ Berne en Suisse.",
      blank: "à",
    },
    {
      type: "multiple-choice",
      question: "Mon ___ est boulanger.",
      options: ["père", "mère", "frère", "sœur"],
      correct: "père",
    },
    {
      type: "word-bank",
      question: "Arrange: 'I'm looking for a pen pal.'",
      tokens: ["Je", "cherche", "une", "un", "correspondante", "ami"],
      correctOrder: ["Je", "cherche", "une", "correspondante"],
    },
  ],
};
