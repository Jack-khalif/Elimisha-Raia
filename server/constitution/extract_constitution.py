import PyPDF2
import os

def extract_constitution_text(pdf_path, output_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for i, page in enumerate(reader.pages):
            page_text = page.extract_text()
            if page_text:
                text += f"\n\n--- Page {i + 1} ---\n\n{page_text}"

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(text)

    print(f"✅ Constitution extracted successfully to {output_path}")

if __name__ == '__main__':
    pdf = os.path.join(os.path.dirname(__file__), "ken127322.pdf")
    output = os.path.join(os.path.dirname(__file__), "constitution_text.txt")
    extract_constitution_text(pdf, output)
