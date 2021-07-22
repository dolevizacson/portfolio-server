// modules
const passport = require('passport');

// errors
const UserAuthenticationError = require('../errors/user-authentication-error');

module.exports = {
  authenticate(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(new Error('problem in authentication process'));
      }

      if (!user) {
        return next(new UserAuthenticationError('failed to login'));
      }

      req.logIn(user, function (err) {
        if (err) {
          return next(new Error('problem in login process'));
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
