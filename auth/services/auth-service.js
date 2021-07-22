// modules
const passport = require('passport');

// files
const UserModel = require('../models/user-model');

module.exports = class AuthService {
  async register(username, password) {
    const user = await UserModel.register({ username }, password);
    return user;
  }
};
