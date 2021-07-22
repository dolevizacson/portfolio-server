module.exports = class ExpressError extends Error {
  constructor() {
    super();
    this.name = 'ExpressError';
    this.statusCode = 500;
  }
};
