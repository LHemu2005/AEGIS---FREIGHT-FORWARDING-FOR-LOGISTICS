import streamlit as st
import numpy as np
import sys
import os
import json
import time

# Add backend to sys path so 'src' can be resolved
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'backend')))

from src.triangulation.graph import build_graph
from src.tariff_engine.hs_classifier import classify_hs_code
from src.routing_engine.ppo_agent import predict_route

# Custom CSS for Raft.ai Theme
st.set_page_config(page_title="AEGIS-FORWARD", layout="wide")
st.markdown("""
<style>
    /* Global Theme Colors */
    :root {
        --bg-color: #0B0F17;
        --card-bg: #131B2B;
        --border-color: #1E293B;
        --primary: #6366F1;
        --status-green: #10B981;
        --alert-amber: #F59E0B;
        --text-color: #E2E8F0;
        --text-muted: #94A3B8;
    }

    /* Base Styling */
    .stApp {
        background-color: var(--bg-color);
        color: var(--text-color);
    }
    
    .css-1d391kg { /* sidebar */
        background-color: var(--card-bg);
    }

    /* Containers */
    div[data-testid="stVerticalBlock"] > div > div[data-testid="stVerticalBlock"] {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    /* Headers */
    h1, h2, h3 {
        color: white !important;
        font-family: 'Inter', sans-serif;
    }
    
    /* Buttons */
    .stButton>button {
        background-color: var(--primary) !important;
        color: white !important;
        border: none !important;
        border-radius: 6px !important;
        padding: 0.5rem 1rem !important;
        font-weight: 600 !important;
        transition: all 0.2s ease !important;
    }
    .stButton>button:hover {
        opacity: 0.9;
        box-shadow: 0 0 10px var(--primary);
    }
    
    /* Input Fields */
    .stTextInput>div>div>input, .stNumberInput>div>div>input {
        background-color: #0F172A !important;
        color: white !important;
        border: 1px solid var(--border-color) !important;
    }

    /* Alert Boxes */
    .alert-amber {
        background-color: rgba(245, 158, 11, 0.1);
        border: 1px solid var(--alert-amber);
        border-left: 4px solid var(--alert-amber);
        color: var(--alert-amber);
        padding: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
    .status-green {
        color: var(--status-green);
        font-weight: bold;
    }
    
    /* Top Nav Bar */
    .top-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: var(--card-bg);
        border-bottom: 1px solid var(--border-color);
        margin-bottom: 2rem;
        margin-top: -3rem;
        margin-left: -4rem;
        margin-right: -4rem;
    }
    
    /* Metrics */
    div[data-testid="stMetricValue"] {
        color: var(--primary) !important;
    }
</style>
""", unsafe_allow_html=True)

# Fake State Data
if "shipment_uuid" not in st.session_state:
    st.session_state.shipment_uuid = "SHP-2026-X8F9"
if "current_step" not in st.session_state:
    st.session_state.current_step = "Ingestion"
if "graph_memory" not in st.session_state:
    st.session_state.graph_memory = []

# Top Status Navigation Bar
st.markdown(f"""
<div class="top-nav">
    <div style="font-size: 1.5rem; font-weight: bold; color: white;">AEGIS-FORWARD</div>
    <div><span style="color: var(--text-muted);">Shipment ID:</span> <b>{st.session_state.shipment_uuid}</b></div>
    <div><span style="color: var(--text-muted);">Status:</span> <span class="status-green">🟢 {st.session_state.current_step}</span></div>
</div>
""", unsafe_allow_html=True)

tab1, tab2, tab3 = st.tabs(["📥 Inbox & Extraction", "⚖️ Triangulation Workspace", "🚢 Shipment Navigator"])

# 1. Intelligent Inbound Inbox & 2. Side-by-Side Extraction Studio
with tab1:
    st.markdown("### Intelligent Inbound Inbox")
    uploaded_files = st.file_uploader("Upload Trade Bundle (Invoice, Packing List, BL)", accept_multiple_files=True)
    
    if st.button("Load Mock Preloaded Bundle"):
        st.session_state.mock_bundle_loaded = True
        st.success("Mock bundle 'SHP-2026-X8F9_documents.zip' loaded.")
        
    st.markdown("---")
    st.markdown("### Side-by-Side Extraction Studio")
    
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.markdown("**📄 Document Viewer**")
        doc_tab = st.radio("Select Document", ["Commercial Invoice", "Packing List", "Bill of Lading"], horizontal=True)
        # Mock PDF view using a placeholder box
        st.markdown(f"""
        <div style="height: 400px; background-color: #0F172A; border: 1px solid #1E293B; display: flex; align-items: center; justify-content: center; color: #94A3B8;">
            {doc_tab} Image/PDF Render Space<br/>
            (Bounding boxes overlaid here)
        </div>
        """, unsafe_allow_html=True)
        
    with col2:
        st.markdown("**📋 Structured Fields (VLM Extracted)**")
        st.text_input("Container Number", value="TCNU8273645")
        st.text_input("HS Description", value="Electric vehicles and automobiles")
        
        c1, c2 = st.columns(2)
        with c1:
            pl_weight = st.number_input("Gross Weight (Packing List)", value=12500.0, step=100.0)
            st.session_state.pl_weight = pl_weight
        with c2:
            bl_weight = st.number_input("Gross Weight (Bill of Lading)", value=12200.0, step=100.0)
            st.session_state.bl_weight = bl_weight
            
        st.number_input("Declared Value ($)", value=450000.0)

# 3. Exception & Triangulation Workspace & 4. Automated Tariff
with tab2:
    st.markdown("### Exception & Triangulation Workspace")
    
    if 'pl_weight' not in st.session_state:
        st.session_state.pl_weight = 12500.0
        st.session_state.bl_weight = 12200.0
        
    variance = abs((st.session_state.pl_weight - st.session_state.bl_weight) / st.session_state.bl_weight) * 100
    
    st.metric("Weight Discrepancy", f"{variance:.2f}%")
    
    if variance > 2.0:
        st.markdown(f"""
        <div class="alert-amber">
            <strong>⚠️ Triangulation Alert:</strong> Variance of {variance:.2f}% exceeds the 2.0% threshold.<br/>
            LangGraph Execution Interrupted. Human review required.
        </div>
        """, unsafe_allow_html=True)
        
        bc1, bc2, _ = st.columns([1, 1, 2])
        with bc1:
            if st.button("✅ Approve Override"):
                st.success("Override approved. Workflow continuing...")
                st.session_state.current_step = "Tariff Classification"
        with bc2:
            if st.button("✏️ Correct Field"):
                st.info("Field correction mode activated.")
    else:
        st.success("Triangulation passed! Variance is within threshold.")
        st.session_state.current_step = "Tariff Classification"
        
    st.markdown("---")
    st.markdown("### Automated Tariff Classification (ChromaDB Vector RAG)")
    
    query_desc = st.text_input("Line-item Description", value="Electric vehicles and automobiles")
    if st.button("Classify via ChromaDB"):
        with st.spinner("Querying vector space..."):
            time.sleep(0.5)
            results = classify_hs_code(query_desc)
            if results and results["ids"] and len(results["ids"][0]) > 0:
                for i in range(len(results["ids"][0])):
                    st.markdown(f"""
                    <div style="background-color: #0F172A; padding: 10px; margin-bottom: 5px; border-left: 3px solid #6366F1;">
                        <strong>HS Code:</strong> {results['ids'][0][i]} &nbsp;|&nbsp; 
                        <strong>Match:</strong> {results['documents'][0][i]} &nbsp;|&nbsp;
                        <strong>Confidence:</strong> {100 - (results['distances'][0][i] * 100):.1f}%
                    </div>
                    """, unsafe_allow_html=True)
            else:
                st.warning("No matches found.")

# 5. Shipment Navigator (PPO Routing)
with tab3:
    st.markdown("### Shipment Navigator (Multimodal PPO)")
    
    loc = st.slider("Current Port Congestion (1-10)", 1.0, 10.0, 8.0)
    fuel = st.slider("Fuel Price Volatility", 1.0, 5.0, 3.5)
    
    if st.button("Generate Routing Prediction"):
        state = np.array([0.0, loc, fuel, st.session_state.pl_weight], dtype=np.float32)
        route = predict_route(state)
        
        st.markdown(f"""
        <div style="background-color: var(--card-bg); padding: 20px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
            <h2 style="color: var(--primary) !important;">Recommended Mode: {route.upper()}</h2>
        </div>
        """, unsafe_allow_html=True)
        
        mc1, mc2, mc3, mc4 = st.columns(4)
        if route == "Sea":
            mc1.metric("Transit Days", "10 Days")
            mc2.metric("Monetary Cost", "$500")
            mc3.metric("Demurrage Risk", "High")
            mc4.metric("Scope-3 CO2", "50 kg")
        elif route == "Rail":
            mc1.metric("Transit Days", "5 Days")
            mc2.metric("Monetary Cost", "$1000")
            mc3.metric("Demurrage Risk", "Medium")
            mc4.metric("Scope-3 CO2", "100 kg")
        else:
            mc1.metric("Transit Days", "2 Days")
            mc2.metric("Monetary Cost", "$2000")
            mc3.metric("Demurrage Risk", "Low")
            mc4.metric("Scope-3 CO2", "300 kg")
            
        st.markdown("<br/>", unsafe_allow_html=True)
        if st.button("🚀 Submit Customs Declaration via MCP"):
            st.success("Payload dispatched to Customs MCP Server!")

# Bottom Agent Log
st.markdown("---")
st.markdown("**🤖 Live Agent Reasoning Activity**")
st.code("""
[2026-08-15 23:45:12] Agent: Loaded bundle SHP-2026-X8F9.
[2026-08-15 23:45:14] Agent: Triangulation variance calculated at 2.45%.
[2026-08-15 23:45:15] Agent: Interrupt triggered! Awaiting HITL override.
""")
