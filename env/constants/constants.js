module.exports = {
  validation: {
    joiModelValidation: 'joiValidator',
    scopes: {
      DEFAULT: 'default',
      blogPost: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
      skillsList: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
      workingOnTask: {
        DEFAULT: 'default',
        UPDATE: 'update',
      },
    },
  },
};
