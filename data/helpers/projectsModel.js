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
    return db('cohorts')
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
    return db('projects as d')
        .join('actions as a', 'a.project_id', 'p.id')
        .where('p.id', id)
        .select('p.project_name', 'a.action_name')
}