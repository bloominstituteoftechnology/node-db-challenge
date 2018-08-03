const db = require('../dbConfig');

module.exports = {
    find
};

function find(id) {
    if (id) {
        return db('projects')
            .where(id)
    }

    return db('projects');
}