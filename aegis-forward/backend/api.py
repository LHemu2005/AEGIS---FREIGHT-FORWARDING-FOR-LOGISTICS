from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import uuid

app = FastAPI(title="Aegis-Forward API", version="1.0.0")

# Allow Next.js frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ShipmentResponse(BaseModel):
    shipment_id: str
    status: str
    message: str

@app.get("/")
def read_root():
    return {"status": "Aegis-Forward AI Engine is online"}

@app.post("/api/v1/shipments/extract", response_model=ShipmentResponse)
async def extract_documents(file: UploadFile = File(...)):
    """
    Endpoint for the Next.js UI to upload a Trade Bundle (PDF/Image).
    In production, this triggers the Gemini VLM and LangGraph pipeline.
    """
    # 1. Generate a unique ID for this shipment
    shipment_id = str(uuid.uuid4())
    
    # 2. Simulate processing time for VLM and Triangulation
    await asyncio.sleep(2)
    
    # 3. Return a successful payload to the frontend
    return {
        "shipment_id": shipment_id,
        "status": "processing",
        "message": f"Document '{file.filename}' received. LangGraph state machine initialized."
    }

@app.get("/api/v1/shipments/{shipment_id}/status")
async def get_shipment_status(shipment_id: str):
    """
    Endpoint for the Next.js UI to poll the live status of LangGraph.
    """
    # Simulated LangGraph state output
    return {
        "shipment_id": shipment_id,
        "state": "triangulation_complete",
        "variance": "0.5%",
        "requires_human_review": False,
        "assigned_hs_code": "8542.31",
        "optimal_route": "Sea Freight"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
