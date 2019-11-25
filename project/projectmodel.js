const db = require('../data/db-config')

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('project');
}

function getById(id) {
    return db('project')
        .where({ id })
        .first();
}

function insert(project) {
    return db('project')
        .insert(project)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('project')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('project')
        .where('id', id)
        .del();
}