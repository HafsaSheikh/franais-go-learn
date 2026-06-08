#!/usr/bin/env python3
"""Compare taxi-content.ts vocabulary with Taxi 1 lexique from taxi 1.md."""
import re
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src" / "lib" / "taxi-content.ts"
MD = Path(r"c:\Users\user\Documents\taxi 1.md")


def normalize(word: str) -> str:
    w = word.lower().strip()
    w = re.sub(r"\s+", " ", w)
    w = w.replace("(se)", "s'").replace("(s')", "s'")
    # strip articles for matching
    for art in ("un ", "une ", "le ", "la ", "l'", "les ", "des ", "du ", "de la ", "d'"):
        if w.startswith(art):
            w = w[len(art) :]
            break
    return w


def extract_lessons(content: str) -> dict:
    lessons = {}
    blocks = re.split(r'\{\s*"lessonId"', content)
    for block in blocks[1:]:
        lid_m = re.match(r'\s*:\s*(\d+)', block)
        if not lid_m:
            continue
        lid = int(lid_m.group(1))
        title_m = re.search(r'"lessonTitle":\s*"([^"]+)"', block)
        vocab_m = re.search(r'"vocabulary":\s*\[(.*?)\],\s*"grammar"', block, re.DOTALL)
        if not vocab_m:
            continue
        words = []
        for vm in re.finditer(r'"fr":\s*"([^"]+)".*?"en":\s*"([^"]+)"', vocab_m.group(1), re.DOTALL):
            words.append({"fr": vm.group(1), "en": vm.group(2), "norm": normalize(vm.group(1))})
        lessons[lid] = {"title": title_m.group(1) if title_m else "?", "vocab": words}
    return lessons


def extract_lexique(md: str) -> dict:
    start = md.find("Lexique multilingue")
    section = md[start:]
    # Lines like: "1 bonjour, interj." or "(^1) bonjour"
    pattern = re.compile(
        r"(?:\(\^?(\d+)\)|^(\d+))\s+"
        r"([a-zA-Z\u00c0-\u024f][^\n,]+?)"
        r"(?:,|\s+(?:n\.|adj\.|v\.|interj\.|adv\.|prép\.|loc\.|conj\.|pron\.))",
        re.MULTILINE,
    )
    by_lesson: dict[int, list] = {}
    for m in pattern.finditer(section):
        lesson = int(m.group(1) or m.group(2))
        if lesson > 12:
            continue
        raw = m.group(3).strip()
        # get English from same line after ANGLAIS column area - simplified: just store French
        by_lesson.setdefault(lesson, []).append({"fr": raw, "norm": normalize(raw)})
    return by_lesson


def main():
    content = CONTENT.read_text(encoding="utf-8")
    md = MD.read_text(encoding="utf-8")
    lessons = extract_lessons(content)
    lexique = extract_lexique(md)

    print("=== Current chapters vocabulary counts ===")
    for lid in sorted(lessons):
        print(f"  Lesson {lid} ({lessons[lid]['title']}): {len(lessons[lid]['vocab'])} in app, {len(lexique.get(lid, []))} in lexique")

    print("\n=== Missing from app (in lexique but not in taxi-content.ts) ===")
    all_missing = {}
    for lid in sorted(lessons):
        app_norms = {v["norm"] for v in lessons[lid]["vocab"]}
        app_frs = {v["fr"].lower() for v in lessons[lid]["vocab"]}
        missing = []
        for entry in lexique.get(lid, []):
            if entry["norm"] not in app_norms and entry["fr"].lower() not in app_frs:
                # fuzzy: check if any app word contains this or vice versa
                found = False
                for an in app_norms:
                    if entry["norm"] in an or an in entry["norm"]:
                        found = True
                        break
                if not found:
                    missing.append(entry["fr"])
        if missing:
            all_missing[lid] = missing
            print(f"\nLesson {lid} - {lessons[lid]['title']} ({len(missing)} missing):")
            for w in missing[:30]:
                print(f"  - {w}")
            if len(missing) > 30:
                print(f"  ... and {len(missing)-30} more")

    # Also check thematic vocab for units 1-3
    print("\n=== Thematic vocab units 1-3 (sample check) ===")
    thematic_start = md.find("Vocabulaire thématique\n\nCes listes")
    thematic = md[thematic_start : thematic_start + 15000]
    unit_words = []
    for line in thematic.splitlines():
        line = line.strip()
        if not line or line.startswith("```") or line.isupper() and len(line) > 3:
            continue
        if re.match(r"^(un|une|le|la|l'|des|à|au|beaucoup|souvent|maintenant)", line, re.I):
            unit_words.append(line)
    print(f"Found {len(unit_words)} thematic words in units 1-3 section")

    # Output JSON for use in update
    out = ROOT / "scripts" / "missing_vocab.json"
    out.write_text(json.dumps(all_missing, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {out}")


if __name__ == "__main__":
    main()
