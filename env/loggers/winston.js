// modules
const appRoot = require('app-root-path');
const winston = require('winston');

require('winston-daily-rotate-file');

const { combine, timestamp, errors, colorize, printf } = winston.format;

const printFunction = (data) => {
  return JSON.stringify(
    data,
    (key, value) => {
      if (key === 'stack') {
        let stackTrace = value.split('\n');
        stackTrace.shift();
        return stackTrace;
      } else if (key === 'message') {
        let formattedMessage = value.split('\n');
        return formattedMessage[0];
      } else {
        return value;
      }
    },
    ' '
  );
};

const formatArgs = [
  timestamp({
    format: 'HH:mm:ss DD-MM-YYYY ',
  }),
  errors({ stack: true }),
  printf(printFunction),
];

let commonOptions = {
  exitOnError: false,
};

if (process.env.NODE_ENV === 'production') {
  const errorsFilesOptions = {
    dirname: `${appRoot}/logs`,
    maxSize: '1m',
    maxFiles: '1',
  };

  const file = new winston.transports.DailyRotateFile({
    ...errorsFilesOptions,
    filename: 'errors.log',
  });

  const exceptionFile = new winston.transports.DailyRotateFile({
    ...errorsFilesOptions,
    filename: 'exception.log',
  });

  const promiseRejectionFile = new winston.transports.DailyRotateFile({
    ...errorsFilesOptions,
    filename: 'rejection.log',
  });

  options = {
    ...commonOptions,
    level: 'info',
    transports: [file],
    exceptionHandlers: [exceptionFile],
    rejectionHandlers: [promiseRejectionFile],
    format: combine(...formatArgs),
  };
} else {
  const console = new winston.transports.Console({ handleExceptions: true });

  options = {
    ...commonOptions,
    level: 'debug',
    transports: [console],
    format: combine(...formatArgs, colorize({ all: true })),
  };
}

module.exports = winston.createLogger(options);
