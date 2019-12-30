require("express-async-errors");
const express = require("express");
const orders = require("../routes/orders");
// const movies = require("../routes/movies");
// const customers = require("../routes/customers");
// const rentals = require("../routes/rentals");
// const returns = require("../routes/returns");
// const auth = require("../routes/auth");
// const users = require("../routes/users");
const error = require("../middeleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/orders", orders);
  // app.use("/api/movies", movies);
  // app.use("/api/customers", customers);
  // app.use("/api/movies", movies);
  // app.use("/api/rentals", rentals);
  // app.use("/api/returns", returns);
  // app.use("/api/users", users);
  // app.use("/api/auth", auth);
  app.use(error);
};
