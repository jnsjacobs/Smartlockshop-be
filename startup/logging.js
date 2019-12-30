require("express-async-errors");
const winston = require("winston");
require("../custom_node_modules/winston-mongodb");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  // defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      collection: "logs"
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.MongoDB({
      db: "mongodb://localhost/vidly",
      collection: "logs"
    })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

process.on("unhandledRejection", ex => {
  throw ex;
});

module.exports = logger;
