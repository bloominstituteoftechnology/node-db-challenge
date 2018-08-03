const db = require('./../db');

module.exports = {
    getContexts: function() {
        return db('contexts')
    },

    getContextById: function(id) {
        return db('contexts')
        .where('id', id)
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