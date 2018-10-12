knex = require('knex')
knexConfig = require('../../knexfile')
const db = knex(knexConfig.development) 
const table = 'projects'
module.exports = {
    find,
    findById,
    add,
    findProjectsActions,

}

function find() {
    return db(table)
}

function findById(id){
    return db(table).where({id}).first()
}

function findProjectsActions(id){
    return db('projects').where({'projects.id':id}).join('actions', 'projects.id','=', 'actions.project_id').select("projects.id", "projects.name", "projects.description", "projects.completed", {actions: "actions.name"})//.join('actions', {'project.id': 'actions.id'}) 
    // return db('projects')
    // .join("actions", "actions.project_id", "=", id)
}

function add(newRecord) {
    return db(table).insert(newRecord).into(table)
}