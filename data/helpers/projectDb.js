const db = require('../db');
const mapper = require('./mapper');

module.exports = {
    get: function(id) {
        let query = db('projects as p');

        return query.then(records => {
            return records.map(record => mapper.recordToBody(record));
        });
    }
};
