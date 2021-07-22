// environment files
const classes = require('../../env/classes/classes');

// files
const SkillsListModel = require('../models/skills-list-model');

// classes
const DBcrud = classes.DBcrud;

module.exports = class SkillsContentService extends DBcrud {
  constructor() {
    super(SkillsListModel);
  }
};
