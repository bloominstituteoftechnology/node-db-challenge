const db = require('../dbConfig');

module.exports = {
    find,
    insert
};

function find(id) {
    if (id) {
        return db('projects')
        .where({id});
    }else return db('projects');
}

function insert(project) {
    return db('projects').insert(project);
}
