const express = require("express");
const morgan = require("morgan");
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

module.exports = app;
