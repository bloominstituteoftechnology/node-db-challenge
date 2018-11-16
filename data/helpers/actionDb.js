const db = require('../dbConfig.js')

module.exports = {
    get: id => {
        let query = db('actions')
        if (id) {
            query.where('id', Number(id)).first()
        }
        return query;
    },
    create: action => {
        return db('actions')
        .insert(action)
        .then(ids => ({id: ids[0]}))
    }

}