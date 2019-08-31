// DATABASE HELPER METHODS - Projects =========|
// --------------------------------------------|
const db = require('../data/db-config.js')
// --------------------------------------------|
const find = () => db('projects')
// --------------------------------------------|
const findById = id =>
  db('projects')
    .where({ id })
    .first()
// --------------------------------------------|
const add = project =>
  db('projects')
    .insert(project)
    .then(ids => findById(ids[0]))
// --------------------------------------------|
module.exports = {
  find,
  findById,
  add
}
