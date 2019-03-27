const knex = require('knex')

const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)



module.exports = {

    find,
    findById,
    add,
    update,
    remove
}



function find() {
    return db('actions');
}

function findById(id) {
    return db('actions')
        .where({ id })
        .first()
}

function add(project) {
    return db('actions')
        .insert(project)
        .into('actions')
}


function update(id, changes) {
    return db('actions')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('actions')
        .where({ id })
        .del()
}
