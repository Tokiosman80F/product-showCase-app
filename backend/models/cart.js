const mongoose = require("mongoose");

// Single Cart Item
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quanttity: Number,
});

// Entire Cart
const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
});

const Cart = mongoose.model("Lego_Shop", cartSchema, "cart");

module.exports = Cart;
