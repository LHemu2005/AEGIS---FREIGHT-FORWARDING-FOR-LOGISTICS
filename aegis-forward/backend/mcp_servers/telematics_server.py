from mcp.server.fastmcp import FastMCP
import uvicorn
from config.settings import settings
import sys

mcp = FastMCP("TelematicsServer")

@mcp.tool()
def get_carrier_schedule(route_id: str) -> dict:
    """Get the carrier schedule for a route."""
    return {"route_id": route_id, "status": "On Time", "eta": "2026-10-15"}

@mcp.tool()
def calculate_co2_emissions(distance_km: float, transport_mode: str) -> float:
    """Calculate Scope-3 CO2 emissions in kg."""
    factors = {"Sea": 0.01, "Rail": 0.03, "Road": 0.10}
    factor = factors.get(transport_mode, 0.05)
    return distance_km * factor

if __name__ == "__main__":
    port = settings.TELEMATICS_SERVER_PORT
    uvicorn.run("mcp_servers.telematics_server:mcp", host="0.0.0.0", port=port)
