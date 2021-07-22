// environment files
const constants = require('../../env/constants/constants');
const routes = require('../../env/constants/routes');

// modules
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({}).plugin(passportLocalMongoose);

const UserModel = mongoose.model(constants.modelsNames.USER, userSchema);

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

module.exports = UserModel;
