const db = require('../db');
const helpers = ('./helpers');

module.exports = {
    getProjects: function() {
        return db('projects')
    },
    getById: function(id) {
        let query = db('projects');
        if(id) {
            query.where('projects.id', id).first();

            const promises = [query, this.getProjectActions(id)];

            return Promise.all(promises).then(function(results) {
                let [project, actions] = results;
                project.actions = actions;

                return helpers.projectToBody(project);
            });
        }
        return query.then(projects => {
            return projects.map(project => helpers.projectToBody(project));
        });
    },
   
    getProjectActions: function(projectId) {
        return db('actions')
        .where('project_id', projectId)
        .then(actions => actions.map(action => helpers.actionToBody(action)));
    },
    insert: function(project) {
        return db('projects')
        .insert(project)
        .then(project => this.get(project.id));
    },
    update: function(id, changes) {
        return db('projects')
        .where('id', id)
        .update(changes)
        .then(count => count > 0 ? this.get(id) : null)
    },
    remove: function(id) {
        return db('projects')
        .where('id', id)
        .del();
    }
}