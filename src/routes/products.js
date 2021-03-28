const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// CREATE PRODUCT
router.post("/product", productsController.createProduct);
// UPDATE PRODUCT
router.get("/products", productsController.getProducts);

module.exports = router;
