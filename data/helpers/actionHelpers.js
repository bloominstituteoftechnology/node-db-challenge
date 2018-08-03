const db = require('../db');
const helpers = require('./helpers');

module.exports = {
    getActions: function() {
        return db('actions')
    },
    getById: function(id) {
        let query = db('actions');
        if(id) {
            return query
            .where('id', id)
            .first()
            .then(action => helpers.actionToBody(action));
        }
        return query.then(actions => {
            return actions.map(action => helpers.actionToBody(action));
        });
    },
    insert: function(action) {
        return db('actions')
        .insert(action)
        .then(action => this.get(action.id));
    },
    update: function(id, changes) {
        return db('actions')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function(id) {
        return db('actions')
        .where('id', id)
        .del();
    },
};