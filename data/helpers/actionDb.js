const db = require('../dbConfig.js');


module.exports = {
    get: function (id) {
        let query = db('actions');

        if (id) {
            return query
                .where('id', id)
                .then(actions => {return actions})
        }

        return query.then(actions => { return actions })
    },
    insert: function (action) {
        return db('actions')
            .insert(action)
            .then(([id]) => this.get(id));
    },
    update: function (id, changes) {
        return db('actions')
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function (id) {
        return db('actions')
            .where('id', id)
            .del();
    },
};
