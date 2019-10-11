const db = require('../data/db.js')
module.exports = {
    get
}

function get(){
    return db('projects');
}