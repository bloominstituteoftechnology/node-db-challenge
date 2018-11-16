const db = require('../dbConfig.js')


module.exports = {
    get: id => {
        const query = db('projects')
        if (id) {
            query.where('id', Number(id))
            .first()
        } 
        return query
    },
    create: function(project) {
      return db('projects')
        .insert(project)
        .then(([id]) => this.get(id));
    },
}

