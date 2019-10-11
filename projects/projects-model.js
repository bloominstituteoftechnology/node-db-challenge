const db = require('../data/db.js')
module.exports = {
    get,
    getById
}

function get(){
    return db('projects');
}

function getById(id){
    return get().where({ id }).first();
}