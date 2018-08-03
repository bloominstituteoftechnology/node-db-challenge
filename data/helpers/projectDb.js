const db = require('../db');

module.exports = {
    get: id => {
        let query = db('project');

        if (id) {
            return query.where('id', id).first();
        }

        return query;
    },
    insert: project => {
        return db('project').insert(project).then(ids => ({ id: ids[0] }));
    },
    update: (id, project) => {
        return db('project').where('id', id).update(project);
    },
    remove: id => {
        return db('project').where('id', id).del();
    }
}