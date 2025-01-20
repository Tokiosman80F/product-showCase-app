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
      error: err,
    });
  }
};

// Add a new product

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to add product",
      error: err,
    });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      request.body,
      { new: true }
    );
  } catch (err) {
    console.log("Prduct controller , DELETE:", err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};

//Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log("Product controller, DELETE:", err);
    res.status(500).json({
      status: "fail",
      error: err,
    });
  }
};
