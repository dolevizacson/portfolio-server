// environment files
const constants = require('../../env/constants/constants');

// modules
const Joi = require('@hapi/joi');

// constants
const { scopes } = constants.validation;

module.exports = {
  [scopes.DEFAULT]: Joi.object().keys({
    header: Joi.string().required(),
    summery: Joi.string().required(),
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          header: Joi.string().allow(''),
          content: Joi.string().required(),
        })
      )
      .min(1),
    conclusion: Joi.object().keys({
      header: Joi.string().allow(''),
      content: Joi.string().allow(''),
    }),
    conclusionSentence: Joi.string().allow(''),
  }),

  [scopes.UPDATE]: Joi.object().keys({
    _id: Joi.string(),
    active: Joi.number(),
    date: Joi.date(),
    update: Joi.date(),
    header: Joi.string().required(),
    summery: Joi.string().required(),
    paragraph: Joi.array()
      .items(
        Joi.object().keys({
          _id: Joi.string(),
          header: Joi.string().allow(''),
          content: Joi.string().required(),
        })
      )
      .min(1),
    conclusion: Joi.object().keys({
      _id: Joi.string(),
      header: Joi.string().allow(''),
      content: Joi.string().allow(''),
    }),
    conclusionSentence: Joi.string().allow(''),
  }),
};
