const db = require('../dbConfig.js');

module.exports = {
    insert: function(action) {
        return db('actions')
            .insert(action)
            .then(ids => ({ id: ids[0]}));
    }
}