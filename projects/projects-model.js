const db = require('../data/db.js')
module.exports = {
    get,
    getById,
    insert
}

function get(){
    return db('projects');
}

function getById(id){
    return get().where({ id }).first();
}

function insert(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => getById(id));
}

