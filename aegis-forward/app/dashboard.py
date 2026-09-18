import streamlit as st
import numpy as np
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.triangulation.graph import build_graph
from src.triangulation.state import TriangulationState
from src.tariff_engine.hs_classifier import classify_hs_code
from src.routing_engine.ppo_agent import predict_route
from config.settings import settings

st.set_page_config(page_title="Aegis-Forward", layout="wide")
st.title("Aegis-Forward Dashboard")

st.markdown("### Multimodal Freight Routing, Document Triangulation & Tariff Classification")

col1, col2 = st.columns(2)

with col1:
    st.header("Document Triangulation (LangGraph)")
    
    iv = st.number_input("Invoice Value ($)", value=10000.0)
    pl = st.number_input("Packing List Value ($)", value=10000.0)
    
    if st.button("Run Triangulation"):
        graph = build_graph()
        initial_state = {"invoice_value": iv, "packing_list_value": pl}
        
        # We need a thread config for LangGraph memory saver
        config = {"configurable": {"thread_id": "1"}}
        
        for event in graph.stream(initial_state, config=config):
            st.write(event)
            
        final_state = graph.get_state(config)
        
        if len(final_state.next) > 0 and final_state.next[0] == "interrupt_node":
            st.error(f"⚠️ HITL Interrupt Triggered! Variance: {final_state.values.get('variance', 0):.2f}%")
            if st.button("Approve & Continue"):
                # Resume graph execution
                for event in graph.stream(None, config=config):
                    st.write(event)
                st.success("Verification complete.")
        else:
            st.success(f"Verification passed automatically. Variance: {final_state.values.get('variance', 0):.2f}%")

with col2:
    st.header("Tariff Classification Engine")
    desc = st.text_input("Goods Description", value="Electric vehicles and automobiles")
    if st.button("Classify HS Code"):
        results = classify_hs_code(desc)
        if results and results["ids"] and len(results["ids"][0]) > 0:
            st.write(f"**Top Match:** {results['ids'][0][0]}")
            st.write(f"**Description:** {results['documents'][0][0]}")
        else:
            st.warning("No matching HS Code found.")

st.divider()

st.header("Multimodal Freight Routing (PPO)")
st.write("State: [current_location, port_congestion_level, fuel_price, cargo_weight]")
loc = st.slider("Current Location", 0.0, 10.0, 0.0)
cong = st.slider("Port Congestion", 1.0, 10.0, 5.0)
fuel = st.slider("Fuel Price", 1.0, 5.0, 3.0)
weight = st.slider("Cargo Weight", 0.0, 50000.0, 20000.0)

if st.button("Predict Optimal Route"):
    state = np.array([loc, cong, fuel, weight], dtype=np.float32)
    route = predict_route(state)
    st.info(f"Optimal Transport Mode: **{route}**")
