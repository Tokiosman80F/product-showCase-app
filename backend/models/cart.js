const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Lego_Shop", cartSchema, "cart");

module.exports = Cart;
