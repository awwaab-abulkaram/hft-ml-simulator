const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  price: Number,
  predictedPrice: Number,
  signal: String,
  pnl: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Trade", TradeSchema);
