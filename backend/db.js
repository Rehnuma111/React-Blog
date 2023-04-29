const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DB_URL;

console.log(db_url);

mongoose
  .connect(db_url, {})
  .then(() => {
    console.log(`Database connected !`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose;
