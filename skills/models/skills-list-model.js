// environment files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');

// modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseSkillsListSchema = new Schema({
  topic: { type: String, required: true },
  // image
  stack: {
    type: [
      {
        language: { type: String, required: true },
        longData: {
          type: [String],
          validate: (paragraphArray) =>
            paragraphArray == null || paragraphArray.length > 0,
        },
      },
    ],
    validate: (paragraphArray) =>
      paragraphArray == null || paragraphArray.length > 0,
  },
});

const skillsListSchema =
  functions.helpers.addBaseSchemaFields(baseSkillsListSchema);

module.exports = mongoose.model(constants.modelsNames.SKILLS, skillsListSchema);
