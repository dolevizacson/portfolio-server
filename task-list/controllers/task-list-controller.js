// environment files
const classes = require('../../env/classes/classes');

//files
const TaskListService = require('../services/task-list-service');
const taskValidationObject = require('../validation/task-validation');

// classes
const Controller = classes.Controller;

// services
const taskListService = new TaskListService();

const taskListController = new Controller(
  taskListService,
  taskValidationObject
);

taskListController.getAll();
taskListController.getAllActive();
taskListController.getOne();
taskListController.post();
taskListController.update();
taskListController.toggle();
taskListController.delete();

module.exports = taskListController.getRouter();
