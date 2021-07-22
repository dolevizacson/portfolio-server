// environment files
const classes = require('../../env/classes/classes');

//files
const SkillsService = require('../services/skills-service');
const skillsListValidationObject = require('../validation/skills-list-validation');

// classes
const Controller = classes.Controller;

// services
const skillsService = new SkillsService();

const skillsController = new Controller(
  skillsService,
  skillsListValidationObject
);

skillsController.getAll();
skillsController.getAllActive();
skillsController.getOne();
skillsController.getOneActive();
skillsController.post();
skillsController.update();
skillsController.delete();
skillsController.toggle();

module.exports = skillsController.getRouter();
