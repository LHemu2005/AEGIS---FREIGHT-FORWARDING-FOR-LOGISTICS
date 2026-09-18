# Aegis-Forward

Aegis-Forward is an advanced multi-agent AI system for multimodal freight routing, document triangulation, and tariff classification.

## Modules

1. **Document Ingestion (Module 1)**: VLM-based extraction from PDF trade documents.
2. **LangGraph Triangulation (Module 2)**: State-machine validation with variance checks and HITL interrupts.
3. **ChromaDB Tariff Engine (Module 3)**: Semantic lookup for HS classification.
4. **Freight Routing Engine (Module 4)**: PPO-based RL policy using Stable-Baselines3 and Gymnasium.
5. **FastMCP Servers (Module 5)**: Specialized domain servers for Customs, Ports, Telematics, and Vectors.

## Getting Started

1. Set up a virtual environment and install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the MCP servers (or use docker-compose).
3. Run the dashboard:
   ```bash
   streamlit run app/dashboard.py
   ```
