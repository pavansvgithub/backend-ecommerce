const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const { createOrder, getOrders } = require("../controllers/orderController");

router.use(verifyToken);
router.post("/", createOrder);
router.get("/", getOrders);

module.exports = router;
