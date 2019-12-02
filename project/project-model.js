const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add, 
};

function find() {
    return db('project');
}
function findById(id){
    return db('project').where({ id }).first();
}