const appRoot = require('app-root-path');

module.exports = {
  APP_MIDDLEWARE: `${appRoot}/env/middleware/app-middleware`,
  AUTH_MIDDLEWARE: `${appRoot}/env/middleware/auth-middleware`,
  CORS: `${appRoot}/env/cors/cors-settings`,
  ERRORS: `${appRoot}/env/errors/errors`,
  ERROR_HANDLERS: `${appRoot}/env/error-handlers/error-handlers`,
  GENERAL_ERROR_HANDLERS: `${appRoot}/env/error-handlers/general-error-handlers`,
  HELPERS_FUNCTIONS: `${appRoot}/env/functions/helpers-functions`,
  SPECIFIC_ERROR_HANDLERS: `${appRoot}/env/error-handlers/specific-error-handlers`,
  MAILER_AGENT: `${appRoot}/env/mailer-agent/mailer-agent`,
  MIDDLEWARE: `${appRoot}/env/middleware/middleware`,
  MONGO: `${appRoot}/env/DB/mongo/connection-settings`,
  MORGAN: `${appRoot}/env/loggers/morgan`,
  SESSIONS: `${appRoot}/env/sessions/sessions-settings`,
  VALIDATION_MIDDLEWARE: `${appRoot}/env/middleware/validation-middleware`,
  WINSTON: `${appRoot}/env/loggers/winston`,
  CLASSES: `${appRoot}/env/classes/classes`,

  // general classes
  BD_CRUD: `${appRoot}/env/classes/DBcrud`,
  CONTROLLER: `${appRoot}/env/classes/Controller`,

  // errors
  NOT_FOUND_IN_DATABASE_ERROR: `${appRoot}/env/errors/not-found-in-database-error`,
  BAD_ENDPOINT_ERROR: `${appRoot}/env/errors/bad-endpoint-error`,
  USER_AUTHENTICATION_ERROR: `${appRoot}/env/errors/user-authentication-error`,
  ROUTE_VALIDATION_ERROR: `${appRoot}/env/errors/route-validation-error`,
  MISSING_VALIDATION_INFORMATION_SCHEMA_ERROR: `${appRoot}/env/errors/missing-validation-information-schema-error`,
  MAIL_NOT_SENT_ERROR: `${appRoot}/env/errors/mail-not-sent-error`,

  // auth
  AUTH: `${appRoot}/auth/controllers/auth-controller`,
  AUTH_SERVICE: `${appRoot}/auth/services/auth-service`,
  USER_MODEL: `${appRoot}/auth/models/user-model`,
  USER_MODEL_VALIDATION: `${appRoot}/auth/validation/user-model-validation`,

  //skills
  SKILLS: `${appRoot}/skills/controllers/skills-controller`,
  SKILLS_CONTENT_SERVICE: `${appRoot}/skills/services/skills-content-service`,
  SKILLS_LIST_MODEL: `${appRoot}/skills/models/skills-list-model`,
  SKILLS_LIST_MODEL_VALIDATION: `${appRoot}/skills/validation/skills-list-model-validation`,

  // task list
  TASK_LIST: `${appRoot}/task-list/controllers/task-list-controller`,
  TASK_LIST_TASK_SERVICE: `${appRoot}/task-list/services/task-list-task-service`,
  TASK_LIST_TASK_MODEL: `${appRoot}/task-list/models/task-list-task-model`,
  TASK_LIST_TASK_VALIDATION: `${appRoot}/task-list/validation/task-list-task-model-validation`,

  // projects
  PROJECTS: `${appRoot}/projects/controllers/projects-controller`,
  PROJECT_SERVICE: `${appRoot}/projects/services/project-service`,
  PROJECT_MODEL: `${appRoot}/projects/models/project-model`,
  PROJECT_MODEL_VALIDATION: `${appRoot}/projects/validation/project-model-validation`,

  // blog
  BLOG: `${appRoot}/blog/controllers/blog-controller`,
  BLOG_POST_SERVICE: `${appRoot}/blog/services/blog-post-service`,
  BLOG_POST_MODEL: `${appRoot}/blog/models/blog-post-model`,
  BLOG_POST_MODEL_VALIDATION: `${appRoot}/blog/validation/blog-post-model-validation`,

  // mailer
  MAILER: `${appRoot}/mailer/controllers/mailer-controller`,
  MAILER_SERVICE: `${appRoot}/mailer/services/mailer-service`,
  MAIL_VALIDATION: `${appRoot}/mailer/validation/mail-validation`,

  // general DB schemas
  BASE_SCHEMA: `${appRoot}/env/general-DB-schemas/baseSchema`,
};
