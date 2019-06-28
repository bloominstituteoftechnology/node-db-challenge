const db = require('../data/dbConfig.js');

module.exports = {
    add,
    getById,
};

function add(projects) {
    return db('projects')
        .insert(projects, id)
        .then(ids => {
            const [id] = ids;

            return getById(id);
        });
}

