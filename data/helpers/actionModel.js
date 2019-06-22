const db = require('../dbConfig.js');


module.exports = {
    insert: function (action) {
        return db('actions')
            .insert(action, 'id')
            .then(([id]) => {
                return db('actions')
                    .where({ id }).first()
            })
            .catch(error => res.status(500).json(error))

    }
}