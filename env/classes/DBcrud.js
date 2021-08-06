// errors
const NotFoundInDatabaseError = require('../errors/not-found-in-database-error');

module.exports = class DBcrud {
  constructor(Model) {
    this.Model = Model;
  }

  async readAllActive() {
    return await this.Model.find({ active: true }, { active: 0 });
  }

  async readAll() {
    return await this.Model.find({});
  }

  async readOneActive(id) {
    const data = await this.Model.findOne(
      { _id: id, active: true },
      { active: 0 }
    );
    if (!data) {
      throw new NotFoundInDatabaseError(
        'Object not found in database collection'
      );
    } else {
      return data;
    }
  }

  async readOne(id) {
    const data = await this.Model.findById(id);
    if (!data) {
      throw new NotFoundInDatabaseError(
        'Object not found in database collection'
      );
    } else {
      return data;
    }
  }

  async create(object) {
    return await this.Model.create(object);
  }

  async update(id, object) {
    const updatedObject = await this.Model.findByIdAndUpdate(
      id,
      { ...object, update: Date.now() },
      { new: true }
    );
    if (!updatedObject) {
      throw new NotFoundInDatabaseError(
        'Object not found in database collection'
      );
    } else {
      return updatedObject;
    }
  }

  async toggle(id) {
    const toggledObject = await this.Model.findByIdAndUpdate(
      id,
      {
        $bit: {
          active: { xor: 1 },
        },
      },
      { new: true }
    );
    if (!toggledObject) {
      throw new NotFoundInDatabaseError(
        'Object not found in database collection'
      );
    } else {
      return toggledObject;
    }
  }

  async deleteOne(id) {
    const deletedObject = await this.Model.findByIdAndDelete(id);
    if (!deletedObject) {
      throw new NotFoundInDatabaseError(
        'Object not found in database collection'
      );
    } else {
      return deletedObject;
    }
  }
};
