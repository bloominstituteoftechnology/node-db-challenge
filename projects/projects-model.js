const db = require ('../data/db-config')

module.exports = {
    getAll,
}

function getAll() {
    return db('projects')
}