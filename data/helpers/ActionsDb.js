const db = require('./../db');

module.exports = {
    getProjects: function() {
        return db('actions')
    },

    getActionById: function(id) {
        const query = db('actions as a');
        const promises = [query, this.joinAct(id), this.joinCont(id)]
        return Promise.all(promises).then(function(results) {
            let [projects, actions, contexts] = results;
            let project = projects[0];
            project.actions = actions.map(a => {return a});
            project.contexts = contexts.map(c => {return c});

            return project;
        })
    },



    insert: function(action) {
        return db('actions')
        .insert(action)
        .select(ids => ({id: ids[0]}));
    },

    update: function(id, action) {
        return db('actions')
        .where('id', id)
        .update(action)
    },

    delete: function(id) {
        return db('actions')
        .delete()
        .where('id', id)
    }

    
}