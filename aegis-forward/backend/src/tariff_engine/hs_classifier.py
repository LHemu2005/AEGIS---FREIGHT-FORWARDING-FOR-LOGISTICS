from src.tariff_engine.db_setup import init_chroma_db

def classify_hs_code(description: str, top_k: int = 3):
    """Executes dense vector retrieval to query candidate HS codes."""
    collection = init_chroma_db()
    
    results = collection.query(
        query_texts=[description],
        n_results=top_k
    )
    
    return results
