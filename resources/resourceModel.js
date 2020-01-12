const db = require('../data/db-config.js');

module.exports = {
    findAll,
    add
};

function findAll() {
    return db('resources');
}

function add(newResource) {
    return db('resources').insert(newResource)
    }