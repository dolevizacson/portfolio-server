// environment files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');

// modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseTaskSchema = new Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
  isDone: { type: Boolean, default: false },
});

const taskSchema = functions.helpers.addBaseSchemaFields(baseTaskSchema);

module.exports = mongoose.model(constants.modelsNames.TASK_LIST, taskSchema);
