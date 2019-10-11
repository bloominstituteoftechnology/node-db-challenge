const db = require('../data/db.js')
module.exports = {
    get,
    getById,
    insert
}

function get(){
    return db('resources');
}

function getById(id){
    return get().where({ id }).first();
}

function insert(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => getById(id));
}