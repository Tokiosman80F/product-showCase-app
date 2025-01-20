const Product = require("../models/product");

// Fetching all products

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      result: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    console.log("Product Controller:", err);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};
