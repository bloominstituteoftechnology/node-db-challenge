const db = require('../dbConfig');

module.exports = {
    find,
    insert,
    update,
    remove
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

function update(id, project) {
    return db('projects').where({id}).update(project);
}

function remove(id) {
    return db('projects').where({id}).del();
}