import chromadb
from config.settings import settings

def init_chroma_db():
    """Initializes ChromaDB collection with tariff embeddings."""
    client = chromadb.PersistentClient(path=settings.CHROMA_DB_DIR)
    
    collection = client.get_or_create_collection(
        name="wco_hs_codes",
        metadata={"hnsw:space": "cosine"}
    )
    
    # Pre-populate with some sample codes if empty
    if collection.count() == 0:
        documents = [
            "Electric vehicles and automobiles",
            "Computer processors and memory",
            "Cotton textiles and clothing",
            "Agricultural wheat and grains"
        ]
        ids = ["870380", "854231", "520811", "100119"]
        
        collection.add(
            documents=documents,
            ids=ids
        )
    
    return collection
