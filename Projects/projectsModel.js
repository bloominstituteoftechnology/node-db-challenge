const db = require('../db/dbConfig');

module.exports = {
    get: function(id){
        let query = db('projects');
        return query;
    },
    insert: function(project){
        return db('projects')
            .insert(project)
            .then(([id])=>{this.get(id)});
    },
    update: function(id, changes){
        return db('projects')
            .where('id', id)
            .update(changes)
            .then(projs => (projs > 0 ? this.get(id) : null));
    },
    delete: function(id){
        return db('projects')
            .where('id',id)
            .del()
            .then(() => { this.get()});
    }
};