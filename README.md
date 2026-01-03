Machine Learning–Based High-Frequency Trading Simulator

MERN Stack with Python Microservices

Overview

This project implements a machine learning–driven high-frequency trading (HFT) simulator designed for educational and experimental use. The simulator provides a controlled, risk-free environment to study how machine learning models can be integrated with modern web architectures to simulate algorithmic trading workflows. It operates entirely on historical or synthetic price data and does not interact with live financial markets.

The system focuses on architecture, integration, and system behavior rather than real-world trading performance, making it suitable for academic projects and learning purposes.

System Architecture

The simulator follows a microservice-based architecture, separating prediction, execution, storage, and visualization into independent components that communicate via REST APIs.

Frontend (React):
Provides a user interface for initiating simulated trades and viewing real-time trade logs and performance metrics.

Backend (Node.js + Express):
Acts as the central controller, handling trade execution logic, communication with the ML service, and interaction with the database.

Machine Learning Service (Python + Flask):
Generates short-term price predictions using a trained regression model.

Database (MongoDB):
Stores executed trades, predictions, trade signals, profit/loss values, and timestamps.

This modular design ensures loose coupling, scalability, and easy extensibility.

Machine Learning Component

The prediction module is implemented as an independent Python microservice. A Random Forest regression model is trained offline using historical price data, where the current price serves as the input feature and the next price as the target.

At runtime, the trained model is loaded by the Flask service. For each trade request, the backend sends the current price to the ML service, which returns the predicted price through a REST API. The architecture allows the prediction model to be replaced with more advanced techniques (e.g., LSTM) without modifying other system components.

Trading Workflow

The simulator executes trades using a simple, rule-based strategy:

The user initiates a simulated trade through the frontend.

The backend forwards the current price to the ML service.

The ML service predicts the next price.

The backend generates a BUY signal if the predicted price exceeds the current price; otherwise, a SELL signal is generated.

Profit or loss (PnL) is calculated as the difference between predicted and current prices.

Trade details are stored in MongoDB and sent back to the frontend for visualization.

Transaction costs, slippage, and market impact are intentionally excluded to keep the focus on system integration and learning.

Evaluation Summary

The system was tested locally using historical or synthetic data. Results confirmed:

Reliable communication between all services

Consistent ML predictions via REST APIs

Correct trade signal generation and PnL calculation

Real-time frontend updates

Persistent storage of all trade records

These observations validate the functional correctness of the microservice-based design.

Disclaimer

This project is intended solely for educational and research purposes and should not be used for real-world trading or financial decision-making.