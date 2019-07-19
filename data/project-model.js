const db = require('./dbConfig');

const find = () => {
    return db('projects');
}

const getProjectActions = (projectId) => {
    return db('actions')
    .where({ project_id: projectId })
    .then(actions => {
        return actions;
    });
}

const findById = (id) => {
    return db('projects')
    .where({ id })
    .first()
    .then(project => {
        if(project) {
            return getProjectActions(id).then(actions => {
                project.actions = actions;
                return project;
            })
        } else {
            return null;
        }
    })

}

const addProject = (project) => {
    return db('projects').insert(project, 'id')
    .then(projects => {
        const projectID = projects[0];
        return projectID;
    })
}

const addAction = (action) => {
    return db('actions')
            .insert(action, 'id')
            .then(action => {
                const actionID = action[0];
                return actionID;
            })
        }




module.exports = {
    find,
    findById,
    addProject,
    addAction,
}