const db = require('../data/dbConfig')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db
    .select('*')
    .from('project')
}

function findById(id) {
    return db
    .select('*')
    .from('project')
    .where({ id })
}

function add (project) {
    return db
    .insert(project)
    .into('project')
}

// function findSteps(id) {
//     return db
//     .select('*')
//     .from('steps')
//     .where({ id })
// }

// function update (id, change) {
//     return db ('schemes')
//     .where({ id })
//     .update(change)
// }

// function update(changes, id) {
//     return db('project')
//       .where({ id })
//       .update(changes);
//   }

// function remove (id) {
//     return db ('project')
//     .where({ id })
//     .del()
// }