const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

const find = (id) => {
    if(id) {
        return db('actions')
            .where({id})
            .first();
    } else {
        return db('actions');
    }
};

const add = (newAction) => {
    return db('actions')
        .insert(newAction)
        .into('actions');
};

module.exports = {
    add
};
