from mcp.server.fastmcp import FastMCP
import uvicorn
from config.settings import settings
import sys

# Create FastMCP server
mcp = FastMCP("CustomsServer")

@mcp.tool()
def get_customs_clearance_status(container_id: str) -> str:
    """Get the customs clearance status for a container."""
    return f"Container {container_id} is cleared for entry."

@mcp.tool()
def lookup_tariff_rate(hs_code: str) -> float:
    """Lookup the tariff rate percentage for a given HS code."""
    # Dummy logic for demonstration
    if hs_code.startswith("85"):
        return 5.0
    return 10.0

if __name__ == "__main__":
    port = settings.CUSTOMS_SERVER_PORT
    uvicorn.run("mcp_servers.customs_server:mcp", host="0.0.0.0", port=port)
