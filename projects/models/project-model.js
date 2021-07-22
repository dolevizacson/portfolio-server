// environment files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');

// modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseProjectSchema = new Schema({
  header: { type: String, required: true },
  summery: { type: String, required: true },
  description: String,
  technologies: {
    type: [String],
    validate: (technologiesArray) =>
      technologiesArray == null || technologiesArray.length > 0,
  },
  links: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  // image array
});

const projectSchema = functions.helpers.addBaseSchemaFields(baseProjectSchema);

module.exports = mongoose.model(constants.modelsNames.PROJECT, projectSchema);
