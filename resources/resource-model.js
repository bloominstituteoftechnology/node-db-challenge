const db = require ('../data/db-config')

module.exports = {
    getAll,
    getById,
    add
}


function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources').where({id})
       
}

function add(newResource) {
    return db('resources').insert(newResource)
}