from src.triangulation.state import TriangulationState

def calculate_variance(state: TriangulationState) -> TriangulationState:
    """Agent node to calculate variance between invoice and packing list values."""
    iv = state.get("invoice_value", 0.0)
    pl = state.get("packing_list_value", 0.0)
    
    if pl == 0:
        variance = 100.0 # avoid div by zero
    else:
        variance = abs((iv - pl) / pl) * 100.0
        
    state["variance"] = variance
    return state

def check_human_in_the_loop(state: TriangulationState) -> TriangulationState:
    """Agent node to check if variance exceeds 2.0% threshold."""
    variance = state.get("variance", 0.0)
    
    if variance > 2.0:
        state["requires_human_review"] = True
        state["status_message"] = f"Variance of {variance:.2f}% exceeds threshold (2.0%). Human review required."
    else:
        state["requires_human_review"] = False
        state["status_message"] = "Auto-verification successful."
        
    return state
