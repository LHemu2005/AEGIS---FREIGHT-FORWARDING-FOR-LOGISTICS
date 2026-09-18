from stable_baselines3 import PPO
from src.routing_engine.environment import RoutingEnvironment
import os

MODEL_PATH = "ppo_routing_model"

def train_agent(total_timesteps: int = 10000):
    """Trains the PPO agent on the multimodal routing environment."""
    env = RoutingEnvironment()
    
    model = PPO("MlpPolicy", env, verbose=1)
    print("Starting PPO training...")
    model.learn(total_timesteps=total_timesteps)
    
    model.save(MODEL_PATH)
    print(f"Model saved to {MODEL_PATH}")
    return model

def predict_route(state):
    """Predicts the optimal route using the trained PPO agent."""
    # Action map
    action_map = {0: "Sea", 1: "Rail", 2: "Road"}
    
    try:
        model = PPO.load(MODEL_PATH)
        action, _states = model.predict(state, deterministic=True)
        return action_map[int(action)]
    except Exception as e:
        print(f"Error loading model: {e}. Returning default route.")
        return "Sea"

if __name__ == "__main__":
    train_agent(1000)
