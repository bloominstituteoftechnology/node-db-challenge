const db = require('../data/db.config');

module.exports = {
    get,
    add
};

function get() {
    return db('resources');
}

function add(resource) {
    return db('resources').insert(resource);
}