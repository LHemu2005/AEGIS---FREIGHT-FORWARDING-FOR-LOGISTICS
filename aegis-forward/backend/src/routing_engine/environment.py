import gymnasium as gym
from gymnasium import spaces
import numpy as np

class RoutingEnvironment(gym.Env):
    """Custom Environment for Multimodal Freight Routing."""
    metadata = {"render_modes": ["console"]}

    def __init__(self):
        super(RoutingEnvironment, self).__init__()
        
        # State: [current_location, port_congestion_level, fuel_price, cargo_weight]
        # Actions: 0: Sea, 1: Rail, 2: Road
        
        self.action_space = spaces.Discrete(3)
        
        # Observation space boundaries
        # location: 0-10, congestion: 1-10, fuel: 0-5.0, weight: 0-50000
        low = np.array([0.0, 1.0, 0.0, 0.0], dtype=np.float32)
        high = np.array([10.0, 10.0, 5.0, 50000.0], dtype=np.float32)
        self.observation_space = spaces.Box(low, high, dtype=np.float32)
        
        self.state = None
        self.steps = 0
        self.max_steps = 10
        
        # Weights for reward function
        self.w1 = 1.0  # Transit Time
        self.w2 = 1.0  # Monetary Cost
        self.w3 = 2.0  # Demurrage Risk
        self.w4 = 0.5  # Scope-3 CO2
        
    def reset(self, seed=None, options=None):
        super().reset(seed=seed)
        self.steps = 0
        self.state = np.array([0.0, 5.0, 3.0, 20000.0], dtype=np.float32)
        return self.state, {}
        
    def step(self, action):
        self.steps += 1
        
        current_loc, congestion, fuel, weight = self.state
        
        # Action effects (simplified logic)
        if action == 0: # Sea
            time = 10.0
            cost = 500.0
            co2 = 50.0
            demurrage = congestion * 20.0
            new_loc = current_loc + 1.0
        elif action == 1: # Rail
            time = 5.0
            cost = 1000.0
            co2 = 100.0
            demurrage = congestion * 5.0
            new_loc = current_loc + 2.0
        else: # Road
            time = 2.0
            cost = 2000.0
            co2 = 300.0
            demurrage = 0.0
            new_loc = current_loc + 3.0
            
        # Reward Function
        reward = -(self.w1 * time + self.w2 * cost + self.w3 * demurrage + self.w4 * co2)
        
        # Update state
        congestion = np.clip(congestion + np.random.normal(0, 1), 1.0, 10.0)
        fuel = np.clip(fuel + np.random.normal(0, 0.2), 1.0, 5.0)
        self.state = np.array([new_loc, congestion, fuel, weight], dtype=np.float32)
        
        # Done condition
        terminated = new_loc >= 10.0
        truncated = self.steps >= self.max_steps
        
        return self.state, float(reward), terminated, truncated, {}
        
    def render(self):
        print(f"Step: {self.steps}, State: {self.state}")
