const db = require('./../db');

module.exports = {
    getProjects: function() {
        return db('projects')
        //.select('name')
    },

    getProjectById: function(id) {
        const query = db('projects as p').where('id', id)

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
        .select('a.id', 'a.description', 'a.notes', 'a.completed')
        .where('a.projectId', id)
    },

    joinCont: function(pId, cId) {
        const query = db('projectcompiler as pc');
        return query.join('contexts as c', 'c.id', 'pc.contextId')
        .join('projects as p', 'p.id', 'pc.projectId')
        .select('c.id', 'c.context')
        .where('pc.projectId', pId)
        
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