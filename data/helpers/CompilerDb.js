const db = require('./../db');

module.exports = {
    getTables: function() {
        return db('projectcompiler')
        //.select('name')
    },

    getTableById: function(id) {
        const query = db('projectcompiler as pt');
        const promises = [query, this.joinAct(id), this.joinCont(id)]
        return Promise.all(promises).then(function(results) {
            let [projects, actions, contexts] = results;
            let project = projects[0];
            project.actions = actions.map(a => {return a});
            project.contexts = contexts.map(c => {return c});

            return project;
        })
    },

    insert: function(table) {
        return db('projectcompiler')
        .insert(table)
        .select(ids => ({id: ids[0]}));
    },

    update: function(id, table) {
        return db('projectcompiler')
        .where('id', id)
        .update(table)
    },

    delete: function(id) {
        return db('projectcompiler')
        .delete()
        .where('id', id)
    }

    
}