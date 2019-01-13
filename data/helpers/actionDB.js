const db = require("../dbConfig");

module.exports = {
    getAction: function(id) {
        let query = db('actions');
        if(id) {
            query.where('id', id);
        }
        return qurey;
    },

    insert: function(action) {
        return db('actions')
            .insert(action)
            .then(ids => ({ id: ids[0] }));
    }
};