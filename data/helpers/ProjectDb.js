const db = require('./../db');

module.exports = {
    getProjects: function() {
        return db('projects')
        .select('name')
    },

    getProjectById: function(id) {
        const query = db('projects as p');
        const promises = [query, this.joinAct(id), this.joinCont(id)]
        return Promise.all(promises).then(function(results) {
            let [projects, actions, contexts] = results;
            let project = projects[0];
            project.actions = actions.map(a => {return a});
            project.contexts = contexts.map(c => {return c});

            return project;
        })
    },

    joinAct: function(id) {
        const query = db('projects as p');
        return query.join('actions as a', 'a.projectId', 'p.id')
        .select('projects', 'actions')
        .where('a.projectId', id)
    },

        joinCont: function(id) {
        const query = db('projects as p');
        return query.join('contexts as c', 'c.projectId', 'p.id')
        .select('projects', 'contexts')
        .where('c.projectId', id)
    }

    
}