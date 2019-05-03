const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getById,
    getProjectWithActions,
    addProject,

};

function getProjects() {
    return db('projects')
    .then(projects => projects.map(obj => changeBoolean(obj)))
};

function getById(id) {
    return db('projects')
    .where({ id })
    .first()
    .then(obj => changeBoolean(obj))
};

function getProjectWithActions(id) {
    return db('actions')
    .select({
        id: 'actions.id',
        description: 'actions.description',
        notes: 'actions.notes',
        complete: 'actions.complete'
    })
    .where({ project_id: id})
    .then(actions => actions.map(obj => changeBoolean(obj)))
};

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(id => {
        return getById(id[0])
    })
}

// Changing boolean from 0/1 to true/false. WORKS PRAISETHESUN
function changeBoolean(obj) {
    return {
        ...obj,
        complete: obj.complete ? true : false
    }
};