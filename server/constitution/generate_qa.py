import json
import os

def generate_qa_from_chapters(input_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        chapters = json.load(f)

    qa_list = []

    for chapter in chapters:
        title = chapter['chapter']
        content = chapter['content']

        # Sample basic Q&A (manual or logic-based). You can enhance this.
        qa_list.append({
            "question": f"What is the summary of {title}?",
            "answer": content[:300] + "..."  # First 300 chars as a preview
        })

    with open(output_path, 'w', encoding='utf-8') as out:
        json.dump(qa_list, out, indent=2)

    print(f"✅ Q&A saved to {output_path}")

if __name__ == "__main__":
    input_json = os.path.join(os.path.dirname(__file__), "constitution_chapters.json")
    output_json = os.path.join(os.path.dirname(__file__), "constitution_qa.json")
    generate_qa_from_chapters(input_json, output_json)
