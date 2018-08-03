const db = require('../db');

module.exports = {
    get: id => {
        return db('project')
    }
}