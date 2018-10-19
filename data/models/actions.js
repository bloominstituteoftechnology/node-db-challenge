
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

 module.exports = {
    addAction
};

function addAction(action) {
    return db('actions')
    .insert(action)
    .into('actions');
}
