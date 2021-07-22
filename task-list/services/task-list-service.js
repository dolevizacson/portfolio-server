// environment files
const classes = require('../../env/classes/classes');

// files
const TaskModel = require('../models/task-model');

// classes
const DBcrud = classes.DBcrud;

module.exports = class WorkingOnTaskService extends DBcrud {
  constructor() {
    super(TaskModel);
  }
};
