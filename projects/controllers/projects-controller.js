// environment files
const classes = require('../../env/classes/classes');

// files
const ProjectService = require('../services/project-service');
const projectValidationObject = require('../validation/project-validation');

// classes
const Controller = classes.Controller;

// services
const projectService = new ProjectService();

const projectsController = new Controller(
  projectService,
  projectValidationObject
);

projectsController.getAllActive();
projectsController.getAll();
projectsController.getOneActive();
projectsController.getOne();
projectsController.post();
projectsController.update();
projectsController.toggle();
projectsController.delete();

module.exports = projectsController.getRouter();
