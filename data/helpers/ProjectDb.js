const db = require('./../db');

module.exports = {
    getProjects: function() {
        return db('projects')
        //.select('name')
    },

    getProjectById: function(id) {
        const query = db('projects as p');
        const promises = [query, this.joinAct(id)]
        return Promise.all(promises).then(function(results) {
            let [projects, actions] = results;
            let project = projects[0];
            project.actions = actions.map(a => {return a});
            return project;
        })
    },

    joinAct: function(id) {
        const query = db('projects as p');
        return query.join('actions as a', 'a.projectId', 'p.id')
        .where('a.projectId', id)
    },

    joinCont: function(id) {
        const query = db('projectcompiler as pc');
        return query.join('contexts as c', 'c.id', 'pc.contextId')
        .join('projects as p', 'p.id', 'pc.projectId')
        .where('pc.projectId', 'p.id' && 'pc.contextId', 'c.id')
    },

    insert: function(project) {
        return db('projects')
        .insert(project)
        .select(ids => ({id: ids[0]}));
    },

    update: function(id, project) {
        return db('projects')
        .where('id', id)
        .update(project)
    },

    delete: function(id) {
        return db('projects')
        .delete()
        .where('id', id)
    }

    
}