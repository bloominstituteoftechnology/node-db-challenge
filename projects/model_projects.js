const db = require('../data/dbConfig');
//import the database as db from dbConfig for configuration

module.exports = {
    findProjects,
    addProjects
};

function findProjects() {
    return db('projects');
};

function addProjects(project) {
    return db('projects')
        .insert(project)
        .then(p_ids => {
            return db('projects')
                .where({ id: p_ids[0] })
                .first()
        })
        .catch(err => {
            console.log(err)
        });
}; 
