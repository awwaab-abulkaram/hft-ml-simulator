const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/tradeRoutes"));

app.listen(5000, () => console.log("Backend running"));
