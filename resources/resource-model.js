const db = require('../data/db-config');

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = {
    find,
    add
}

function find() {
    return db('resource')
}

function add(resource) {
    return db('resource').insert(resource);
}