// environment files
const constants = require('../../env/constants/constants');
// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

module.exports = {
  [scopes.DEFAULT]: Joi.object().keys({
    header: Joi.string().required(),
    description: Joi.string().required(),
  }),

  [scopes.UPDATE]: Joi.object().keys({
    _id: Joi.string().required(),
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    header: Joi.string().required(),
    description: Joi.string().required(),
    isDone: Joi.boolean(),
  }),
};
