const db = require('../db-config')

module.exports = {
    findAll,
    findById,
    add
}

function findAll() {
    return db("resources")
}

function findById(id) {
    return db("resources").where({id})
}

async function add(data) {
    return db("resources").insert(data)
}