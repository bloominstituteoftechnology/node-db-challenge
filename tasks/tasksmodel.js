const db = require('../data/db-config')

module.exports = {
    get,
    getById,
    insert,
    update,
    remove,
};

function get() {
    return db('tasks');
}

function getById(id) {
    return db('tasks')
        .where({ id })
        .first();
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('tasks')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('tasks')
        .where('id', id)
        .del();
}