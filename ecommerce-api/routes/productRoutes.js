const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Public route
router.get("/", getAllProducts);

// Admin routes (protect with auth middleware later)
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
