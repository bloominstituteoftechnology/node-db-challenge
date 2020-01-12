const db = require('../data/db-config.js');

module.exports = {
    findAll,
    add
};

function findAll() {
    return db('projects');
}

function add(newProject) {
    return db('projects').insert(newProject)
    }