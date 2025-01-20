const express = require("express");
const cartController = require("../controller/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(authMiddleware, cartController.getCart)
  .post(authMiddleware, cartController.addToCart);

router.route("/:id").delete(authMiddleware, cartController.removeFromCart);

module.exports = router;
