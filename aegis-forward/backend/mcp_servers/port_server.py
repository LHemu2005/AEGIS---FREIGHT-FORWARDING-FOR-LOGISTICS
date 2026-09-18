from mcp.server.fastmcp import FastMCP
import uvicorn
from config.settings import settings
import sys

mcp = FastMCP("PortServer")

@mcp.tool()
def get_port_congestion_level(port_name: str) -> int:
    """Get the congestion level of a port (1-10)."""
    congestion_map = {"Los Angeles": 8, "Rotterdam": 5, "Singapore": 6}
    return congestion_map.get(port_name, 3)

@mcp.tool()
def calculate_demurrage_fees(container_id: str, days_delayed: int) -> float:
    """Calculate demurrage fees based on days delayed."""
    base_rate = 150.0
    return days_delayed * base_rate

if __name__ == "__main__":
    port = settings.PORT_SERVER_PORT
    uvicorn.run("mcp_servers.port_server:mcp", host="0.0.0.0", port=port)
