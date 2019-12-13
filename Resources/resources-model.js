const db = require('../data/db-config');

module.exports = {
    getById,add, get
}

function getById(id) {
    return db('resources')
    .where({id})
    .first()
}

function add(resource){
    return db('resources')
    .insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}

function get() {
    return db ('resources');
}