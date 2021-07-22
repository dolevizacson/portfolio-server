// environment files
const classes = require('../../env/classes/classes');

// files
const BlogService = require('../services/blog-service');
const blogPostValidationObject = require('../validation/blog-post-validation');

// classes
const Controller = classes.Controller;

// services
const blogService = new BlogService();

const blogController = new Controller(blogService, blogPostValidationObject);

blogController.getAllActive();
blogController.getAll();
blogController.getOneActive();
blogController.getOne();
blogController.post();
blogController.update();
blogController.toggle();
blogController.delete();

module.exports = blogController.getRouter();
