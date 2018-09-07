const db = require('../dbConfig');

module.exports = {

getProjects: () => {
    return db('project')
    .select('name as project')
},









}