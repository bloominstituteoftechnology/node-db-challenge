const db = require('../db');

module.exports = {
    getProjects: function() {
        const query = db('projects');
        return query.then(projects => {
            projects.map(project => {
                return {
                    ...project,
                    completed: completed ? true : false
                }
            })
        })
    },

    // findProjectById: function(id) {
    //     const 
    // }
}

