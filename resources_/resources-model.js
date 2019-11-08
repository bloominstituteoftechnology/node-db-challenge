const db = require("../data/db-config.js");

const get = () => {
  return db("resources");
};

const getById = id => {
  return db("resources")
    .where({ id })
    .first();
};

const add = resource => {
  return db("resources")
    .insert(resource, "*")
    .then(id => {
      return getById(...id);
    });
};

module.exports = {
  get,
  getById,
  add
};
