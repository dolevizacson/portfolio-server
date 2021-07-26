// modules
const express = require('express');
const passport = require('passport');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

//files
const sessions = require('../sessions/sessions-settings');
const morgan = require('../loggers/morgan');
const cors = require('../cors/cors-settings');

const addAppMiddleware = (app) => {
  // express middleware
  // json request parsing
  app.use(express.json());
  // form request parsing
  app.use(express.urlencoded({ extended: false }));

  // middleware
  app.use(mongoSanitize());
  app.use(morgan);
  app.use(helmet());

  // for production on heroku
  if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1);
  }
  app.use(sessions);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cors);
};

module.exports = {
  addAppMiddleware,
};
