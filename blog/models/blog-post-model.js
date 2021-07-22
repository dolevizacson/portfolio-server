// environment files
const functions = require('../../env/functions/functions');
const constants = require('../../env/constants/constants');

// modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseBlogPostSchema = new Schema({
  header: { type: String, required: true },
  summery: { type: String, required: true },
  conclusion: {
    header: String,
    content: String,
  },
  conclusionSentence: String,
  paragraph: {
    type: [
      {
        header: String,
        content: { type: String, required: true },
        //image
      },
    ],
    validate: (paragraphArray) =>
      paragraphArray == null || paragraphArray.length > 0,
  },
});

const blogPostSchema =
  functions.helpers.addBaseSchemaFields(baseBlogPostSchema);

module.exports = mongoose.model(
  constants.modelsNames.BLOG_POST,
  blogPostSchema
);
