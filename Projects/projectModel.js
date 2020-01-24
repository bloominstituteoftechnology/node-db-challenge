const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findProjectByName,
    findById,
    postProject,
    postAction,
    updateProject,
    deleteProject
}

function find() {
    return db('projects')
}

function findProjectByName(name) {
    return db('projects')
        .where({ name })
}

function findById(id) {
    return db('projects as p')
        .where({ id })
        .first()
        .select('p.id', 'p.name', 'p.description', 'p.completed')
        .then(project => {
            return db('actions as a')
                .where({ project_id: id })
                .select('a.id', 'a.description', 'a.notes', 'a.completed')
                .then(actions => {
                    return { ...project, actions }
                })
        })
}

async function postProject(project) {
    const [id] = await db('projects').insert(project)
    return findById(id)
}

async function postAction(action) {
    const [id] = await db('actions').insert(action)
    return findById(action.project_id)
}

async function updateProject(changes, id) {
    const updated = await db('projects').where({ id }).update(changes)
    return findById(id)
}

async function deleteProject(id) {
    const deleted = await db('projects').where({ id }).del()
    if (deleted === 1) {
        return deleted
    } else return null
}