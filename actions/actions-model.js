const db = require('../data/dbConfig.js');

module.exports = {
    getById,
};

function getById() {
    return db('actions')
        .where({ id })
        .first();
}