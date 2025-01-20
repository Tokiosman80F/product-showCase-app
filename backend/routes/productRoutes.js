const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProduct);

router
  .route("/:id")
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
