// modules
const mongoose = require('mongoose');

// files
const baseSchema = require('../general-DB-schemas/baseSchema');

const helpers = {
  asyncWrapper(fn) {
    return function (req, res, next) {
      fn(req, res, next).catch((e) => next(e));
    };
  },
  getMongooseModel(modelName) {
    return mongoose.model(modelName);
  },
  addBaseSchemaFields(schema) {
    return schema.add(baseSchema);
  },
};

module.exports = helpers;
