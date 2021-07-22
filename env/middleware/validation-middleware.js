// environment files
const constants = require('../constants/constants');

// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

// errors
const MissingValidationInformationSchemaError = require('../errors/missing-validation-information-schema-error');
const RouteValidationError = require('../errors/route-validation-error');

module.exports = {
  validateRequestData(validationObject, scope, options = {}) {
    return (req, res, next) => {
      const { body } = req;
      let validationSchema;
      try {
        validationSchema =
          validationObject[scope] || validationObject[scopes.DEFAULT];
      } catch (err) {
        return next(
          new MissingValidationInformationSchemaError(
            err.message || `No validation schema found`
          )
        );
      }

      const validationResult = Joi.validate(body, validationSchema, {
        ...options,
        allowUnknown: true,
      });

      if (!validationResult.error) {
        return next();
      } else {
        return next(
          new RouteValidationError(
            validationResult.error.message || `Route validation error`
          )
        );
      }
    };
  },
};
