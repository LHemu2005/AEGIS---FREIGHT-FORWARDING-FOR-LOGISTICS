from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import MemorySaver
from src.triangulation.state import TriangulationState
from src.triangulation.agents import calculate_variance, check_human_in_the_loop

def should_interrupt(state: TriangulationState) -> str:
    """Routing function to determine if HITL interrupt is needed."""
    if state.get("requires_human_review"):
        return "interrupt_node"
    return END

def human_review_node(state: TriangulationState) -> TriangulationState:
    """Node where execution pauses for human intervention."""
    # In a real app, this node would wait for input. 
    # With LangGraph, we can use an interrupt.
    # Here we simulate the state update after a human approves it.
    state["requires_human_review"] = False
    state["status_message"] = "Human review completed and approved."
    return state

def build_graph():
    """Builds the LangGraph triangulation workflow."""
    workflow = StateGraph(TriangulationState)
    
    workflow.add_node("calculate", calculate_variance)
    workflow.add_node("check", check_human_in_the_loop)
    workflow.add_node("interrupt_node", human_review_node)
    
    workflow.add_edge(START, "calculate")
    workflow.add_edge("calculate", "check")
    
    # Conditional edge for HITL
    workflow.add_conditional_edges("check", should_interrupt)
    
    # After interrupt, go to end (or back to process)
    workflow.add_edge("interrupt_node", END)
    
    # We compile the graph with a memory saver to allow interrupts
    memory = MemorySaver()
    graph = workflow.compile(checkpointer=memory, interrupt_before=["interrupt_node"])
    
    return graph
