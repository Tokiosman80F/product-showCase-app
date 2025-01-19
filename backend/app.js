const express = require("express");
const morgan = require("morgan");
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

console.log(process.env.NODE_ENV);

module.exports = app;
