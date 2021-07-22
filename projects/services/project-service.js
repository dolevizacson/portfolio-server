// environment files
const classes = require('../../env/classes/classes');
// files
const ProjectModel = require('../models/project-model');

// classes
const DBcrud = classes.DBcrud;

module.exports = class ProjectsService extends DBcrud {
  constructor() {
    super(ProjectModel);
  }
};
