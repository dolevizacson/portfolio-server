// files
const winston = require('../loggers/winston');

// error handlers
const loggerErrorHandler = (err, req, res, next) => {
  console.err(err);
  winston.error(err);
  next(err);
};

const addGeneralErrorHandlers = (app) => {
  app.use(loggerErrorHandler);
};

module.exports = {
  addGeneralErrorHandlers,
};
