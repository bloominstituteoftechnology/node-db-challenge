// DATABASE HELPER METHODS - Tasks ============|
// --------------------------------------------|
const db = require('../data/db-config.js')
// --------------------------------------------|
const find = () =>
  db('tasks as t')
    .leftJoin('projects as p', 'p.id', 't.proj_id')
    .select('t.id', 't.task_desc', 't.notes', 't.completed', 'p.name', 'p.desc')
// --------------------------------------------|
const findById = id =>
  db('tasks')
    .where({ id })
    .first()
// --------------------------------------------|
const add = task =>
  db('tasks')
    .insert(task)
    .then(ids => findById(ids[0]))
// --------------------------------------------|
module.exports = {
  find,
  findById,
  add
}
