// modules
const mongoose = require('mongoose');

const mongoInit = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Mongo DB connected');
  } catch (error) {
    console.error('Mongo DB initial connection Error');
  }
};

module.exports = {
  mongoInit,
};
