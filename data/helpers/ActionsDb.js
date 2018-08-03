const db = require('./../db');

module.exports = {
    getActions: function() {
        return db('actions')
    },

    getActionById: function(id) {
        return db('actions')
        .where('id', id)
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