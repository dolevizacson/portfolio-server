// modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const baseSchema = new Schema({
  active: { type: Number, default: 1 },
  date: { type: Date, default: Date.now() },
  update: { type: Date, default: Date.now() },
});

module.exports = baseSchema;
