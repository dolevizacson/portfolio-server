// environment files
const constants = require('../../env/constants/constants');

// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

module.exports = {
  [scopes.DEFAULT]: Joi.object().keys({
    topic: Joi.string().required(),
    stack: Joi.array()
      .items(
        Joi.object().keys({
          language: Joi.string().required(),
          longData: Joi.array().items(Joi.string()).min(1),
        })
      )
      .min(1),
  }),

  [scopes.UPDATE]: Joi.object().keys({
    _id: Joi.string(),
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    topic: Joi.string().required(),
    stack: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string(),
          language: Joi.string().required(),
          longData: Joi.array().items(Joi.string()).min(1),
        })
      )
      .min(1),
  }),
};
