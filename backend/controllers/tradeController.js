const axios = require("axios");
const Trade = require("../models/Trade");

exports.executeTrade = async (req, res) => {
  const { price } = req.body;

  const ml = await axios.post("http://127.0.0.1:8000/predict", { price });
  const predictedPrice = ml.data.predicted_price;
  const signal = predictedPrice > price ? "BUY" : "SELL";

  const trade = new Trade({
    price,
    predictedPrice,
    signal,
    pnl: predictedPrice - price
  });

  await trade.save();
  res.json(trade);
};

exports.getTrades = async (req, res) => {
  res.json(await Trade.find());
};
