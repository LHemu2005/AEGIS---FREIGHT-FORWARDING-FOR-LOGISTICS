from pypdf import PdfReader
from pdf2image import convert_from_path

def extract_text_from_pdf(file_path: str) -> str:
    """Extracts layout-aware text from PDF."""
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

def convert_pdf_to_images(file_path: str) -> list:
    """Converts PDF pages to images for VLM ingestion."""
    return convert_from_path(file_path)
