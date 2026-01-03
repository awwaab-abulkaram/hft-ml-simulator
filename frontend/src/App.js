import axios from "axios";
import { useState } from "react";

function App() {
  const [trades, setTrades] = useState([]);

  const trade = async () => {
    await axios.post("http://localhost:5000/api/trade", {
      price: Math.random() * 100 + 100
    });
    const res = await axios.get("http://localhost:5000/api/trades");
    setTrades(res.data);
  };

  return (
    <div>
      <h2>HFT Simulator</h2>
      <button onClick={trade}>Execute Trade</button>
      <ul>
        {trades.map((t, i) => (
          <li key={i}>
            {t.signal} @ {t.price.toFixed(2)} | PnL: {t.pnl.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
