const knex = require('knex');

const db_config = require('../knexfile');

const db = knex(db_config.development);

module.exports = {


    getProjects: () => {
        return db('projects')
        .leftJoin('actions', 'projects.id', 'actions.project_id')
    }

    // getActionById: (id) => {
    //     return db('actioncontexts').where('action_id', id);
    // }


}