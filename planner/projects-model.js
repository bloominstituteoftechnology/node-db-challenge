const db = require('../data/dbConfig.js')

module.exports = {
   findAll
}

function findAll() {
    return db("projects")
}