const db = require('../data/dbConfig.js')

module.exports = {
   getTasks
}

function getTasks() {
    return db('tasks')
}