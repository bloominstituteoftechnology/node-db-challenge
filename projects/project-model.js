
const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
}

function getProjects(){
    return db('projects')
}

