// modules
const httpStatus = require('http-status-codes');
const mongoose = require('mongoose');

// errors
const NotFoundInDatabaseError = require('../errors/not-found-in-database-error');
const BadEndpointError = require('../errors/bad-endpoint-error');
const UserAuthenticationError = require('../errors/user-authentication-error');
const MissingValidationInformationSchemaError = require('../errors/missing-validation-information-schema-error');
const RouteValidationError = require('../errors/route-validation-error');
const MailNotSentError = require('../errors/mail-not-sent-error');

const appSpecificErrorHandler = (err, req, res, next) => {
  let errorMessage = 'Internal Server Error';

  switch (true) {
    case err instanceof NotFoundInDatabaseError:
      errorMessage = 'Not found in database error';
      if (err.message) {
        errorMessage += ` : ${err.message}`;
      }
      return res.status(httpStatus.NOT_FOUND).send(errorMessage);

    case err instanceof UserAuthenticationError:
      errorMessage = 'Authentication error';
      if (err.message) {
        errorMessage += ` : ${err.message}`;
      }
      return res.status(httpStatus.UNAUTHORIZED).send(errorMessage);

    case err instanceof MissingValidationInformationSchemaError:
    case err instanceof RouteValidationError:
      errorMessage = 'Validation error';
      if (err.message) {
        errorMessage += ` : ${err.message}`;
      }
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);

    case err instanceof mongoose.Error.ValidationError:
    case err instanceof mongoose.Error.CastError:
    case err instanceof mongoose.Error.ValidatorError:
      errorMessage = 'Database validation error';
      if (err.message) {
        errorMessage += ` : ${err.message}`;
      }
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errorMessage);

    case err instanceof BadEndpointError:
      errorMessage = 'Bad endpoint error';
      if (err.message && err.url) {
        errorMessage += ` : ${err.url} ${err.message}`;
      }
      return res.status(httpStatus.NOT_FOUND).send(errorMessage);

    case err instanceof MailNotSentError:
      errorMessage = 'Mail not sent error';
      if (err.message && err.url) {
        errorMessage += ` : ${err.url} ${err.message}`;
      }
      return res.status(httpStatus.NOT_FOUND).send(errorMessage);

    case err instanceof Error:
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(errorMessage);
    default:
      return next(err);
  }
};

const addSpecificErrorHandlers = (app) => {
  app.use(appSpecificErrorHandler);
};

module.exports = {
  addSpecificErrorHandlers,
};
