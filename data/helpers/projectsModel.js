const knex = require('knex')

const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)



module.exports = {

    find,
    findById,
    add,
    update,
    remove,
    project
}



function find(){
    return db('projects');
}

function findById(id) {
    return db('prohec')
        .where({ id })
        .first()
}

function add(project) {
    return db('projects')
        .insert(project)
        .into('projects')
}


function update(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
}

function project(id) {
    return db('projects as p')
        .join('actions as a', 'a.project_id', 'p.id')
        .where('p.id', id)
}