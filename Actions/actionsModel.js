const db = require('../db/dbConfig');

module.exports = {
    get: function (id) {
        let query = db('actions');
        if(id){
            return query
                .where('id', id)
                .first();
        }
        return query;
    },
    insert: function (action) {
        return db('actions')
            .insert(action)
            .then(([id]) => { this.get(id) });
    },
    update: function (id, changes) {
        return db('actions')
            .where('id', id)
            .update(changes)
            .then(projs => (projs > 0 ? this.get(id) : null));
    },
    delete: function (id) {
        return db('actions')
            .where('id', id)
            .del()
            .then(() => { this.get() });
    }
};