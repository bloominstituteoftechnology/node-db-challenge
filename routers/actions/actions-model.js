const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.development)

module.exports = {
    addAction
}

function addAction(action) {
    return db('actions')
        .insert(action)
        .then(ids => ({ id: ids[0] }))
}

