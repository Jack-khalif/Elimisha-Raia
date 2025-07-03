import re
import json
import os

def split_constitution_by_chapters(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match "CHAPTER ONE", "CHAPTER TWO", etc.
    pattern = re.compile(r'(CHAPTER\s+[A-Z]+.*?)\n', re.DOTALL)
    chapters = pattern.split(content)

    structured = []

    # Recombine titles and content
    for i in range(1, len(chapters), 2):
        title = chapters[i].strip()
        body = chapters[i + 1].strip() if i + 1 < len(chapters) else ""
        structured.append({
            'chapter': title,
            'content': body
        })

    with open(output_path, 'w', encoding='utf-8') as out:
        json.dump(structured, out, indent=2)

    print(f"✅ Chapters saved to {output_path}")

if __name__ == "__main__":
    input_txt = os.path.join(os.path.dirname(__file__), "constitution_text.txt")
    output_json = os.path.join(os.path.dirname(__file__), "constitution_chapters.json")
    split_constitution_by_chapters(input_txt, output_json)
