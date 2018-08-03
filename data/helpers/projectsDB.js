const db = require('../db');



module.exports = {
    getProjects: function () {
        const query = db('projects');
        return query.then(projects => {
            return projects.map(project => {
                return {
                    ...project,
                    completed: project.completed ? true : false
                }
            })
        })
    },

    findProjectById: function (id) {
        const projectQuery = db('projects').where('id', id);
        const actionsQuery = db('actions').where('project_id', id).select('id', 'description', 'notes', 'completed');

        const promises = [projectQuery, actionsQuery]
        return Promise.all(promises)
            .then(results => {
                const [projects, actions] = results;

                if (projects.length === 0) {
                    return 0
                } else {
                    projects.forEach(project => project.completed = project.completed ? true : false)
                }

                if (actions.length !== 0) {
                    actions.forEach(action => action.completed = action.completed ? true : false)
                }

                return {
                    ...projects[0],
                    actions
                }
            })
    },

    addProject: function (project) {
        return db('projects').insert(project);
    },

    deleteProject: function (id) {
        const project = db('projects').where('id', id);
        const deleteResponse = db('projects').where('id', id).del();
        const promises = [project, deleteResponse]
        return Promise.all(promises)
    },

    updateProject: function (id, changes) {
        return db('projects').where('id', id).update(changes);
    }
}

