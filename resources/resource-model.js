const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add
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

// function findSteps(id) {
//     return db
//     .select('*')
//     .from('steps')
//     .where({ id })
// }

function add (resource) {
    return db
    .insert(resource)
    .into('resource')
}

// function update (id, change) {
//     return db ('schemes')
//     .where({ id })
//     .update(change)
// }

// function update(changes, id) {
//     return db('resource')
//       .where({ id })
//       .update(changes);
//   }

// function remove (id) {
//     return db ('resource')
//     .where({ id })
//     .del()
// }