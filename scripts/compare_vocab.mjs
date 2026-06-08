#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT = join(ROOT, "src/lib/taxi-content.ts");
const MD = "c:/Users/user/Documents/taxi 1.md";

const POS =
  "(?:n\\.\\s*[mf]\\.?|adj\\.?|v\\.\\s*(?:tr|intr|aux|imp)\\.?|v\\.\\s*pron\\.?|interj\\.?|adv\\.?|prép\\.?|loc\\.?|conj\\.?|pron\\.?|\\+\\s*fam\\.?)";

function normalize(word) {
  let w = word.toLowerCase().trim().replace(/\s+/g, " ");
  w = w.replace(/\(se\)/g, "s'").replace(/\(s'\)/g, "s'");
  for (const art of ["un ", "une ", "le ", "la ", "l'", "les ", "des ", "du ", "de la ", "d'"]) {
    if (w.startsWith(art)) {
      w = w.slice(art.length);
      break;
    }
  }
  return w;
}

function extractLessons(content) {
  const lessons = {};
  const blocks = content.split(/\{\s*"lessonId"/);
  for (const block of blocks.slice(1)) {
    const lidM = block.match(/^\s*:\s*(\d+)/);
    if (!lidM) continue;
    const lid = parseInt(lidM[1], 10);
    const titleM = block.match(/"lessonTitle":\s*"([^"]+)"/);
    const vocabM = block.match(/"vocabulary":\s*\[(.*?)\],\s*"grammar"/s);
    if (!vocabM) continue;
    const words = [];
    const re = /"fr":\s*"([^"]+)".*?"en":\s*"([^"]+)"/gs;
    let m;
    while ((m = re.exec(vocabM[1])) !== null) {
      words.push({ fr: m[1], en: m[2], norm: normalize(m[1]) });
    }
    lessons[lid] = { title: titleM?.[1] ?? "?", vocab: words };
  }
  return lessons;
}

function extractLexique(md) {
  const start = md.indexOf("ANGLAIS ESPAGNOL ITALIEN");
  const section = md.slice(start);
  const lines = section.split("\n");
  const byLesson = {};

  for (const rawLine of lines) {
    const line = rawLine.replace(/```/g, "").trim();
    if (!line || line.startsWith("ANGLAIS") || line.startsWith("cent ")) continue;

    const m = line.match(
      new RegExp(
        `^(?:\\(\\^?(\\d+)\\)|(\\d+))\\s+(.+?),\\s*${POS}(?:\\s+irr\\.?)?(?:\\s+[^.]*?)?\\.\\s+(.+)$`,
      ),
    );
    if (!m) continue;

    const lesson = parseInt(m[1] || m[2], 10);
    if (lesson > 12) continue;

    const fr = m[3].trim();
    let en = m[4].trim();
    // English ends before Spanish/other language column (often accented or all-lowercase foreign word)
    const enCut = en.match(
      /^(.+?)(?:\s+(?:hasta|ahora|bienes|buenos|de\s|al\s|con\s|por\s|en\s+casa|tener|hacer|muy|más|sin|para|desde|hasta|iah|buon|bom|arïo|anno|ir\b|andare|amar|comprar|aleman|belga|tedesco|alem[aâ]o))/i,
    );
    if (enCut) en = enCut[1].trim();
    // trim OCR garbage at end
    en = en.replace(/[^a-zA-Z\s\-'(),./!?]+$/, "").trim();
    if (!en || en.length < 2) continue;
    if (fr.length > 60) continue; // skip OCR noise

    (byLesson[lesson] ??= []).push({ fr, en, norm: normalize(fr) });
  }
  return byLesson;
}

function isPresent(entry, appNorms, appFrs) {
  if (appNorms.has(entry.norm) || appFrs.has(entry.fr.toLowerCase())) return true;
  for (const an of appNorms) {
    if (entry.norm.includes(an) || an.includes(entry.norm)) return true;
  }
  return false;
}

const content = readFileSync(CONTENT, "utf8");
const md = readFileSync(MD, "utf8");
const lessons = extractLessons(content);
const lexique = extractLexique(md);

const allMissing = {};
const toAdd = {};

for (const lid of Object.keys(lessons).map(Number).sort((a, b) => a - b)) {
  const appNorms = new Set(lessons[lid].vocab.map((v) => v.norm));
  const appFrs = new Set(lessons[lid].vocab.map((v) => v.fr.toLowerCase()));
  const missing = [];
  for (const entry of lexique[lid] ?? []) {
    if (!isPresent(entry, appNorms, appFrs)) missing.push(entry);
  }
  if (missing.length) {
    allMissing[lid] = missing;
    toAdd[lid] = missing;
    console.log(`\nLesson ${lid} - ${lessons[lid].title} (${missing.length} missing):`);
    missing.forEach((e) => console.log(`  + ${e.fr} → ${e.en}`));
  }
}

writeFileSync(join(ROOT, "scripts/missing_vocab.json"), JSON.stringify(toAdd, null, 2), "utf8");
console.log("\nTotal missing:", Object.values(toAdd).reduce((s, a) => s + a.length, 0));
