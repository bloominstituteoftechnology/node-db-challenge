const db = require('../data/dbConfig.js');

module.exports = {
    add,
    get,
};

function get() {
    return db('projects');
}