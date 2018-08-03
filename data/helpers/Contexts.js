const db = require('./../db');

module.exports = {
    getContexts: function() {
        return db('contexts')
    },

    getContextById: function(id) {
        const query = db('contexts as c');
        const promises = [query, this.joinAct(id), this.joinCont(id)]
        return Promise.all(promises).then(function(results) {
            let [projects, actions, contexts] = results;
            let project = projects[0];
            project.actions = actions.map(a => {return a});
            project.contexts = contexts.map(c => {return c});

            return project;
        })
    },



    insert: function(context) {
        return db('contexts')
        .insert(context)
        .select(ids => ({id: ids[0]}));
    },

    update: function(id, context) {
        return db('contexts')
        .where('id', id)
        .update(context)
    },

    delete: function(id) {
        return db('contexts')
        .delete()
        .where('id', id)
    }

    
}