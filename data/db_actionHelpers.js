const knex = require('knex');

const db_config = require('../knexfile.js');

const db = knex(db_config.development);

module.exports = {

    getActions: () => {
        return db('action');
    },

    getActionById: (id) => {
        return db('action').where('id', id);
    },

    addAction: (action) => {
        return db('action').insert(action);
    }
};