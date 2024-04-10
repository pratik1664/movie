const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/MOVIE_COUNTER")
    .then(() => {
      console.log("db connect success");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };