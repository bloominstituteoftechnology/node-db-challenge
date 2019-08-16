const db = require('../data/db-config');

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = {
    find,
    findById,
    add
};

function find() {
    return db('task')
}

function add(task) {
    return db('task').insert(task);
}

function findById(task) {
    return db('task').insert(task);
}