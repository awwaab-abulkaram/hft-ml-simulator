const router = require("express").Router();
const controller = require("../controllers/tradeController");

router.post("/trade", controller.executeTrade);
router.get("/trades", controller.getTrades);

module.exports = router;
