// environmet files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');
const routes = require('../../env/constants/routes');

// modules
const express = require('express');

// files
const AuthService = require('../services/auth-service');
const userValidationObject = require('../validation/user-validation');
const middleware = require('../../env/middleware/middleware');

// constants
const { scopes } = constants.validation;

// services
const authService = new AuthService();

const authController = express.Router();

authController.post(
  routes.AUTH_LOGIN,
  middleware.validation.validateRequestData(
    userValidationObject,
    scopes.DEFAULT
  ),
  middleware.auth.authenticate,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send(`Log In successful`);
  })
);

authController.get(
  routes.AUTH_LOGOUT,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('Logout successful');
  })
);

authController.get(
  routes.AUTH_IS_LOGGED_IN,
  middleware.auth.isLoggedIn,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    res.send('logged in');
  })
);

authController.get(
  routes.AUTH_REGISTER,
  functions.helpers.asyncWrapper(async (req, res, next) => {
    const username = process.env.AUTH_USERNAME;
    const password = process.env.AUTH_PASSWORD;
    const user = await authService.register(username, password);
    res.send(`User ${user.username} register successfully`);
  })
);

module.exports = authController;
