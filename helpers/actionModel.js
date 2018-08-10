const db = require('../data/db')
const mappers = require("./mappers");

module.exports = {
    get: function(id) {
        let query = db('actions');

        if (id) {
            return query
            .where('id', id)
            .first()
            .then(action => mappers.actionToBody(action));
        }

        return query.then(actions => {
            return actions.map(action => mappers.actionToBody(action));
        })
    },

    
}