const db = require('../dbConfig.js');


module.exports = {
    insert: function (project) {
        return db('projects')
            .insert(project, 'id')
            .then(([id]) => {
                return db('projects')
                    .where({ id }).first()
            })
            .catch(error => res.status(500).json(error))

    },
    findById: function (id) {
        return db('projects')
            .where({ id })
            .first()
            .then(project => {
                if (project) {
                    return getProjectActions(id).then(actions => {
                        project.actions = actions;
                        return project;
                    });
                } else {
                    return null;
                }
            });
    }
}

function getProjectActions(projectId) {
    return db('actions')
        .where({ project_id: projectId })
        .then(actions => {
            return actions;
        });
}