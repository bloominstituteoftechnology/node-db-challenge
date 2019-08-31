// DATABASE HELPER METHODS - Resources ========|
// --------------------------------------------|
const db = require('../data/db-config.js')
// --------------------------------------------|
const find = () => db('resources')
// --------------------------------------------|
const findById = id =>
  db('resources')
    .where({ id })
    .first()
// --------------------------------------------|
const add = resource =>
  db('resources')
    .insert(resource)
    .then(ids => findById(ids[0]))
// --------------------------------------------|
module.exports = {
  find,
  findById,
  add
}
