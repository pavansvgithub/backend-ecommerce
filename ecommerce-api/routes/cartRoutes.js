const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");
const verifyToken = require("../middleware/authMiddleware");

router.use(verifyToken); // protect all cart routes

router.get("/", getCart);
router.post("/", addToCart);
router.delete("/:productId", removeFromCart);

module.exports = router;
