const db = require('../data/db-config.js');

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = {
    find,
    add
};

function find() {
    return db('projects')
}

function add(project) {
    return db('projects').insert(project);
}