// initialization
const { modules, files, functions, routes } = require('../utils/access');

//modules
const appRoot = modules.APPROOT;
const morgan = modules.MORGAN;
const path = modules.PATH;
const rfs = modules.RFS;

// 'http-request.log'
if (process.env.NODE_ENV === 'production') {
  try {
    const logStream = rfs('http-request.log', {
      maxFiles: 1,
      size: '1M',
      path: path.join(appRoot.toString(), 'logs'),
    });
    module.exports = morgan('common', { stream: logStream });
  } catch (err) {
    console.log('No HTTP logs: ' + err);
    module.exports = morgan('dev', {
      stream: process.stderr,
    });
  }
} else {
  module.exports = morgan('dev');
}
