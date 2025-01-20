const Cart = require("../models/cart");

//Get User Cart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id }).populate(
      "products.productId"
    );

    if (!cart) return res.status(200).json({ products: [], total: 0 });

    const total = cart.products.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );
    res.status(200).json({ products: cart.products, total });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

//Add product to cart

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) {
      cart = new Cart({ userId: req.user.id, products: [] });
    }

    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (productIndex >= 0) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "fail", message: "Failed to add to cart", error: err });
  }
};

// Remove product from cart

exports.removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({ userId: req.user.id });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== id
    );

    await cart.save();
    res.status(200).json({ message: "Product remove from cart" });
  } catch (err) {
    console.log("Remove from cart:", err);
    res.status(500).json({ message: "Fail to remove" });
  }
};
