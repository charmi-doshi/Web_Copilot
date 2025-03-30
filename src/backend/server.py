# main.py
from fastapi import FastAPI
from agents import webui_agent, clinical_rag_agent, food_security_agent

app = FastAPI()

@app.post("/query")
async def route_query(query: dict):
    agent_type = query.get('type')
    if agent_type == "clinical":
        return await clinical_rag_agent.process(query)
    elif agent_type == "food":
        return await food_security_agent.process(query)
    else:
        return await webui_agent.process(query)
