// modules
const sessions = require('express-session');
const mongoStore = require('connect-mongo')(sessions);
const mongoose = require('mongoose');

const options = {
  name: process.env.SESSIONS_COOKIE_NAME,
  secret: process.env.SESSIONS_SECRET,
  saveUninitialized: false,
  resave: false,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(process.env.SESSIONS_COOKIE_LIFE_TIME) * 1000, // 3 days
  },
  store: new mongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: parseInt(process.env.SESSIONS_COOKIE_TOUCH), // 1 day
    ttl: parseInt(process.env.SESSIONS_COOKIE_LIFE_TIME), // 3 days
  }),
};

if (process.env.NODE_ENV === 'production') {
  options.cookie.sameSite = 'none';
  // options.cookie.secure = true;
}

module.exports = sessions(options);
