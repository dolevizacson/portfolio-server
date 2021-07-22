// environment files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');
const routes = require('../../env/constants/routes');

// modules
const express = require('express');

// files
const MailerService = require('../services/mailer-service');
const mailValidationObject = require('../validation/mail-validation');
const middleware = require('../../env/middleware/middleware');

// services
const mailerService = new MailerService();

// constants
const { scopes } = constants.validation;

const mailerController = express.Router();

mailerController.post(
  routes.CREATE,
  middleware.validation.validateRequestData(
    mailValidationObject,
    scopes.DEFAULT
  ),
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const mail = await mailerService.sendMail(req.body);
    res.send(`Mail send successfully`);
  })
);

module.exports = mailerController;
