const db = require('../data/db-config')

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('resources');
}

function getById(id) {
    return db('resources')
        .where({ id })
        .first();
}

function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('resources')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('resources')
        .where('id', id)
        .del();
}