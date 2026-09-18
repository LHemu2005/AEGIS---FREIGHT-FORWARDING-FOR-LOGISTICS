from mcp.server.fastmcp import FastMCP
import uvicorn
from config.settings import settings
import sys

mcp = FastMCP("VectorServer")

@mcp.tool()
def query_vector_store(query: str, top_k: int = 3) -> list:
    """Query the vector store for similar items."""
    # Stub response representing vector matches
    return [{"id": "doc_1", "score": 0.95}, {"id": "doc_2", "score": 0.85}]

@mcp.tool()
def index_document(doc_id: str, content: str) -> bool:
    """Index a new document into the vector store."""
    return True

if __name__ == "__main__":
    port = settings.VECTOR_SERVER_PORT
    uvicorn.run("mcp_servers.vector_server:mcp", host="0.0.0.0", port=port)
