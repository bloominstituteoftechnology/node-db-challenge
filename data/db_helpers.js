const knex = require('knex');

const db_config = require('../knexfile');

const db = knex(db_config.development);

module.exports = {

    getActionById: (id) => {
        return db('actioncontexts').where('action_id', id);
    }

}