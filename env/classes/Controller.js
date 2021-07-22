// environment files
const functions = require('../functions/functions');
const routes = require('../constants/routes');
const constants = require('../constants/constants');

// modules
const express = require('express');
const httpStatus = require('http-status-codes');

// constants
const { scopes } = constants.validation;

module.exports = class Controller {
  constructor(service, validationObject) {
    this.service = service;
    this.validationObject = validationObject;
    this.router = express.Router();
    this.middleware = require('../middleware/middleware');
  }

  getRouter() {
    return this.router;
  }

  // get all active
  getAllActive() {
    this.router.get(
      routes.READ_ALL_ACTIVE,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const dataList = await this.service.readAllActive();
        res.send(dataList);
      })
    );
  }

  // get all
  getAll() {
    this.router.get(
      routes.READ_ALL,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const dataList = await this.service.readAll();
        res.send(dataList);
      })
    );
  }

  // get one active
  getOneActive() {
    this.router.get(
      routes.READ_ACTIVE,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const data = await this.service.readOneActive(id);
        res.send(data);
      })
    );
  }

  // get one
  getOne() {
    this.router.get(
      routes.READ,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const data = await this.service.readOne(id);
        res.send(data);
      })
    );
  }

  // post
  post() {
    this.router.post(
      routes.CREATE,
      this.middleware.auth.isLoggedIn,
      this.middleware.validation.validateRequestData(
        this.validationObject,
        scopes.DEFAULT
      ),
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { body } = req;
        const data = await this.service.create(body);
        res.status(httpStatus.CREATED).send(data);
      })
    );
  }

  // update
  update() {
    this.router.put(
      routes.UPDATE,
      this.middleware.auth.isLoggedIn,
      this.middleware.validation.validateRequestData(
        this.validationObject,
        scopes.UPDATE
      ),
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const { body } = req;
        const updatedData = await this.service.update(id, body);
        res.send(updatedData);
      })
    );
  }

  // toggle
  toggle() {
    this.router.patch(
      routes.MODIFY,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const toggledData = await this.service.toggle(id);
        res.send(toggledData);
      })
    );
  }

  // delete
  delete() {
    this.router.delete(
      routes.DELETE,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const deletedData = await this.service.deleteOne(id);
        res.send(deletedData);
      })
    );
  }
};
