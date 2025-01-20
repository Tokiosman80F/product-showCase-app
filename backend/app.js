const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const productRouter = require("./routes/productRoutes");
const authRouter = require("./routes/authRoutes");
const cartRouter = require("./routes/cartRoutes");
//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/products", productRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/cart", cartRouter);

module.exports = app;
