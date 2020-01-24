const db = require('../data/dbConfig.js')

module.exports = {
   findAll,
   add
}

function findAll() {
    return db("resources")
}

function add(data) {
    return db("resources").insert(data)

}

