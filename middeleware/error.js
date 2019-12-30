// const logger = require("../startup/logging");

module.exports = function(error, req, res, next) {
  console.log(error.message, error);
  return res.status(500).send(error.message);
};
