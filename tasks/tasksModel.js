const db = require('../data/db-config.js');

module.exports = {
    findAll,
    add
};

function findAll() {
    return db('tasks');
}

function add(newTask) {
    return db('resources').insert(newTask)
    }