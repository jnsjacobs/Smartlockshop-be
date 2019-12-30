const mongoose = require("mongoose");
const logger = require("./logging");
const config = require("config");

const options = {
  useFindAndModify: false,
  useNewUrlParser: true
};

module.exports = function(testsuite) {
  let db = config.get("db");
  db = testsuite ? db + testsuite : db;
  mongoose.connect(db, options).then(() => {
    if (process.env.NODE_ENV !== "test") logger.info(`Connected to ${db}...`);
  });
};
