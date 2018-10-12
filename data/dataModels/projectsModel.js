knex = require('knex')
knexConfig = require('../../knexfile')
const db = knex(knexConfig.development) 
const table = 'projects'
module.exports = {
    find,
    findById,
    add,

}

function find() {
    return db(table)
}

function findById(id){
    return db(table).where({id}).first()
}

function add(newRecord) {
    return db(table).insert(newRecord).into(table)
}