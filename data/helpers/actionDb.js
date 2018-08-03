const db = require('../db');

module.exports = {
    get: id => {
        let query = db('action');

        if (id) {
            return query.where('id', id).first().then(action => action ? ({ ...action, completed: action.completed === 1 ? true : false }) : query);
        }

        return query.then(actions => {
            return actions.map(action => ({ ...action, completed: action.completed === 1 ? true : false }))
        });;
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