// environment files
const constants = require('../../env/constants/constants');

// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

module.exports = {
  [scopes.DEFAULT]: Joi.object().keys({
    username: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};
