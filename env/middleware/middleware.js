// files
const appMiddleware = require('./app-middleware');
const authMiddleware = require('./auth-middleware');
const validationMiddleware = require('./validation-middleware');

module.exports = {
  auth: authMiddleware,
  validation: validationMiddleware,
  addAppMiddleware: appMiddleware.addAppMiddleware,
};
