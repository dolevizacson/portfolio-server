// environment files
const classes = require('../../env/classes/classes');

// files
const BlogPostModel = require('../models/blog-post-model');

// classes
const DBcrud = classes.DBcrud;

module.exports = class BlogPostService extends DBcrud {
  constructor() {
    super(BlogPostModel);
  }
};
