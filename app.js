// environment files
const routes = require('./env/constants/routes');

// modules
const express = require('express');
const dotenv = require('dotenv');

// environment variables init
dotenv.config();

// files
const mongo = require('./env/DB/mongo/connection-settings');
const errorHandlers = require('./env/error-handlers/error-handlers');
const middleware = require('./env/middleware/middleware');
const mailerAgent = require('./env/mailer-agent/mailer-agent');

// errors
const BadEndpointError = require('./env/errors/bad-endpoint-error');

// db connections init
mongo.mongoInit();

// mailer init
mailerAgent.mailerInit();

// controllers
const auth = require('./auth/controllers/auth-controller');
const skills = require('./skills/controllers/skills-controller');
const projects = require('./projects/controllers/projects-controller');
const blog = require('./blog/controllers/blog-controller');
const taskList = require('./task-list/controllers/task-list-controller');
const mailer = require('./mailer/controllers/mailer-controller');

process.on('uncaughtException', function (err) {
  // TODO: mailer logic to report on problems with the app
  console.err(err);
});

const app = express();

middleware.addAppMiddleware(app);

// routes
app.use(routes.AUTH, auth);
app.use(routes.SKILLS, skills);
app.use(routes.PROJECTS, projects);
app.use(routes.BLOG, blog);
app.use(routes.TASK_LIST, taskList);
app.use(routes.CONTACT, mailer);

// default route handler
app.all('*', (req, res, next) => {
  next(
    new BadEndpointError(
      'No such endpoint available',
      req.hostname + req.originalUrl
    )
  );
});

errorHandlers.addErrorHandlers(app);

module.exports = app;
