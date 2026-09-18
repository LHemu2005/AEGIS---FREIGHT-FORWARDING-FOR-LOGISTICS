from typing import TypedDict, Optional

class TriangulationState(TypedDict):
    invoice_value: float
    packing_list_value: float
    variance: Optional[float]
    requires_human_review: bool
    status_message: str
