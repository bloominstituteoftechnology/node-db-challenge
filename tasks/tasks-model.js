const db = require('../data/db.js')

module.exports = {
    get,
    getById,
    insert
}

function get(){
    return db('tasks');
}

function getById(id){
    return get().where({ id }).first();
}

function insert(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => getById(id));
}