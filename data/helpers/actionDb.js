const db = require('../db');

module.exports = {
    get: id => {
        let query = db('action');

        if (id) {
            return query.where('id', id).first();
        }

        return query;
    },
    insert: action => {
        return db('action').insert(action).then(ids => ({ id: ids[0] }));
    },
    update: (id, action) => {
        return db('action').where('id', id).update(action);
    },
    remove: id => {
        return db('action').where('id', id).del();
    }
}