import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error
import joblib

# Load Binance dataset
data = pd.read_csv("../data/binance-dataset.csv")

# Sort by time to preserve temporal order
data = data.sort_values(by="open_time")

# Select required columns
data = data[["open", "high", "low", "close", "volume"]]

# Create prediction target (next close price)
data["next_close"] = data["close"].shift(-1)

# Drop last row (NaN target)
data.dropna(inplace=True)

# Features and target
X = data[["open", "high", "low", "volume"]]
y = data["next_close"]

# Train-test split (hold-out validation)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, shuffle=False
)

# Train Random Forest model
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42,
    n_jobs=-1
)
model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Evaluation metrics
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

print("Evaluation Metrics:")
print(f"MAE  : {mae:.4f}")
print(f"MSE  : {mse:.4f}")
print(f"RMSE : {rmse:.4f}")

# Save trained model
joblib.dump(model, "newmodel.pkl")
print("Model trained and saved successfully")
