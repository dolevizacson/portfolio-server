// environment files
const constants = require('../../env/constants/constants');

// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

module.exports = {
  [scopes.DEFAULT]: Joi.object().keys({
    from: Joi.string().email().required(),
    subject: Joi.string(),
    text: Joi.string(),
    attachments: Joi.array().max(0),
  }),
};
