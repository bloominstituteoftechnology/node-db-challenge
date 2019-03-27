
const knex = require('knex')

const knexConfig = require('../../knexfile')
const db = knex(knexConfig.development)



module.exports = {

    find,
    findById,
    add,
    update,
    remove,
    project, actions
}



function find(){
    return db('projects');
}

function findById(id) {
    return db('projects')
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
    return db('projects')
        .where({ id })


}

function actions(id) {
    return db('actions')
        .where("project_id", id)
}
