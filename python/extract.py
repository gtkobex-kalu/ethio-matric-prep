import json
import re
from pathlib import Path

from pypdf import PdfReader


PROJECT_ROOT = Path(__file__).resolve().parent.parent
PAPERS_DIR = PROJECT_ROOT / "client" / "public" / "PAST PAPEPERS"
OUTPUT_FILE = PROJECT_ROOT / "client" / "src" / "questions.json"
QUESTION_MARKER = re.compile(r"(?m)^\s*(\d{1,3})\s*[.)]\s*")
OPTION_MARKER = re.compile(r"(?<![A-Za-z0-9])([A-D])\s*[.)]\s+")


def clean_fragment(text: str) -> str:
    """Collapse PDF line breaks and whitespace into a readable fragment."""
    return re.sub(r"\s+", " ", text).strip()


def parse_questions(text: str, subject: str, year: str) -> list[dict]:
    """Extract numbered questions that contain exactly four ordered choices."""
    markers = list(QUESTION_MARKER.finditer(text))
    questions = []

    for index, marker in enumerate(markers):
        end = markers[index + 1].start() if index + 1 < len(markers) else len(text)
        fragment = text[marker.end():end].strip()
        option_markers = list(OPTION_MARKER.finditer(fragment))

        if [match.group(1) for match in option_markers] != ["A", "B", "C", "D"]:
            continue

        question_text = clean_fragment(fragment[:option_markers[0].start()])
        options = [
            clean_fragment(
                fragment[option_markers[option_index].end():
                         option_markers[option_index + 1].start()]
                if option_index < 3
                else fragment[option_markers[option_index].end():]
            )
            for option_index in range(4)
        ]

        if not question_text or any(not option for option in options):
            continue

        questions.append({
            "id": f"{subject}-{year}-{marker.group(1)}",
            "subject": subject,
            "year": year,
            "questionText": question_text,
            "options": options,
            "correctAnswer": "A",
        })

    return questions


def extract_pdf(pdf_path: Path, subject: str) -> list[dict]:
    """Read every page of one PDF and parse its question text."""
    year_match = re.search(r"(\d{4})", pdf_path.stem)
    year = year_match.group(1) if year_match else pdf_path.stem
    reader = PdfReader(pdf_path)
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    questions = parse_questions(text, subject, year)
    print(f"{pdf_path.name}: extracted {len(questions)} questions")
    return questions


def main() -> None:
    """Collect subject papers and write the structured JSON database."""
    database: dict[str, list[dict]] = {}

    if not PAPERS_DIR.is_dir():
        raise FileNotFoundError(f"Past-paper directory not found: {PAPERS_DIR}")

    for subject_dir in sorted(path for path in PAPERS_DIR.iterdir() if path.is_dir()):
        subject_questions = []
        for pdf_path in sorted(subject_dir.glob("*.pdf")):
            try:
                subject_questions.extend(extract_pdf(pdf_path, subject_dir.name))
            except Exception as error:
                print(f"Skipping {pdf_path}: {error}")
        database[subject_dir.name] = subject_questions

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(json.dumps(database, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    total = sum(len(questions) for questions in database.values())
    print(f"Saved {total} questions across {len(database)} subjects to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
