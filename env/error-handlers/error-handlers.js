// files
const generalErrorHandlers = require('./general-error-handlers');
const specificErrorHandlers = require('./specific-error-handlers');

const addErrorHandlers = (app) => {
  generalErrorHandlers.addGeneralErrorHandlers(app);
  specificErrorHandlers.addSpecificErrorHandlers(app);
};

module.exports = {
  addErrorHandlers,
};
