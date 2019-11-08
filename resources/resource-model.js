const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db
    .select('*')
    .from('resource')
}

function findById(id) {
    return db
    .select('*')
    .from('resource')
    .where({ id })
}

function findSteps(id) {
    return db
    .select('*')
    .from('steps')
    .where({ id })
}

function add (user) {
    return db
    .insert(user)
    .into('resource')
}

// function update (id, change) {
//     return db ('schemes')
//     .where({ id })
//     .update(change)
// }

function update(changes, id) {
    return db('resource')
      .where({ id })
      .update(changes);
  }

function remove (id) {
    return db ('resource')
    .where({ id })
    .del()
}