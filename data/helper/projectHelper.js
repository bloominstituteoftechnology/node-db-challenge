const db = require('../dbConfig');

module.exports = {
    find
};

function find(id) {
    if (id) {
        return db('projects')
        .where({id});
    }else return db('projects');
}