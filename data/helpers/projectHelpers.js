const knex = require('knex');
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);
const mappers = require('./mappers');

module.exports = {
    get: function (id) {
        if (id) {
            db('projects').where('project.id', id).first();

            const promises = [db('projects'), this.getProjectActions(id)]; // [ projects, actions ]

            return Promise.all(promises).then(function (results) {
                let [project, actions] = results;
                project.actions = actions;

                return mappers.projectToBody(project);
            });
        }

        return db('projects').then(projects => {
            return projects.map(project => mappers.projectToBody(project));
        });
    },
    getProjectActions: function (projectId) {
        return db('actions')
            .where('project_id', projectId)
            .then(actions => actions.map(action => mappers.actionToBody(action)));
    },
    insert: function (project) {
        return db('projects')
            .insert(project)
            .then(([id]) => this.get(id));
    },
};