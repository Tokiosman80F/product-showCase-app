const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

//Database Connection
console.log(process.env.USERNAME);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB is connected successfully"))
  .catch((err) => console.log("Error:", err));

const app = require("./app");
const port = process.env.PORT || 5000;

// Starting server
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
