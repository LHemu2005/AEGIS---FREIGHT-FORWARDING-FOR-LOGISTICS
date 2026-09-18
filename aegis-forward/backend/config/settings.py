import os
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseModel):
    # API Keys
    GOOGLE_API_KEY: str = os.getenv("GOOGLE_API_KEY", "")
    
    # Thresholds
    VARIANCE_THRESHOLD_PERCENT: float = 2.0
    
    # Server configuration
    CUSTOMS_SERVER_PORT: int = 8001
    PORT_SERVER_PORT: int = 8002
    TELEMATICS_SERVER_PORT: int = 8003
    VECTOR_SERVER_PORT: int = 8004

    # ChromaDB
    CHROMA_DB_DIR: str = "./chroma_db"
    
settings = Settings()
