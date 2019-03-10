const cors = require('cors');
const config = require('../config');

const middleware = {
  checkCors(req, res, next) {
    const corsOptions = {
      origin(origin, callback) {
        if (
          process.env.NODE_ENV === 'production' &&
          !config.allowDomains().has(origin)
        ) {
          callback(new Error('Not allowed by CORS'));
        } else {
          callback(null, true);
        }
      },
    };
    return cors(corsOptions);
  },
};

module.exports = middleware;