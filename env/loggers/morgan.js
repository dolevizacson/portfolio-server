//modules
const appRoot = require('app-root-path');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

// 'http-request.log'

let morganConfig;

if (process.env.NODE_ENV === 'production') {
  try {
    const logStream = rfs('http-request.log', {
      maxFiles: 1,
      size: '1M',
      path: path.join(appRoot.toString(), 'logs'),
    });
    morganConfig = morgan('common', {
      stream: logStream,
      skip(req, res) {
        return res.statusCode < 400;
      },
    });
  } catch (err) {
    console.log('No HTTP logs: ' + err);
    morganConfig = morgan('dev', {
      stream: process.stderr,
    });
  }
} else {
  morganConfig = morgan('dev');
}

module.exports = morganConfig;
