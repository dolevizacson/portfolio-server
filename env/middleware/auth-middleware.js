// initialization
const appRoot = require('app-root-path');
const modules = require(`${appRoot}/env/dependencies/app-dependencies`);
const files = require(`${appRoot}/env/constants/files-paths`);

// modules
const passport = modules.PASSPORT;

// errors
const UserAuthenticationError = require(files.USER_AUTHENTICATION_ERROR);

module.exports = {
  authenticate(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        throw err;
      }
      if (!user) {
        throw new UserAuthenticationError('failed to login');
      }

      req.logIn(user, function(err) {
        if (err) {
          throw err;
        }
        next();
      });
    })(req, res, next);
  },

  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      throw new UserAuthenticationError('not logged in');
    }
  },
};