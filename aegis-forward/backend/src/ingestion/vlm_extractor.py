from google import genai
from pydantic import BaseModel, Field
import os
import json
from config.settings import settings

class ExtractedDocument(BaseModel):
    gross_weight: float = Field(default=0.0, description="Gross weight in kg")
    net_weight: float = Field(default=0.0, description="Net weight in kg")
    declared_value: float = Field(default=0.0, description="Declared monetary value")
    hs_description: str = Field(default="", description="Description of goods")
    container_id: str = Field(default="", description="Container identifier")

def extract_fields(text_content: str) -> ExtractedDocument:
    """Extracts structured JSON fields from text using Gemini."""
    client = genai.Client(api_key=settings.GOOGLE_API_KEY)
    
    prompt = f"""
    Extract the following fields from the document text:
    gross_weight, net_weight, declared_value, hs_description, container_id.
    
    Document Text:
    {text_content}
    
    Respond only with a JSON object.
    """
    
    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        # Parse JSON from response
        # Naive extraction for demo purposes
        raw_text = response.text
        if "```json" in raw_text:
            raw_text = raw_text.split("```json")[1].split("```")[0].strip()
        
        data = json.loads(raw_text)
        return ExtractedDocument(**data)
    except Exception as e:
        print(f"VLM Extraction error: {e}")
        return ExtractedDocument()
