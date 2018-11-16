const db = require('../dbConfig.js');

module.exports = {
    getProjects,
    getProject,
    addProject
};

// returns all projects
function getProjects() {
    return db('projects');
}

// adds project if name does not already exist
function addProject(project) {
    return db('projects')
        .insert(project)
        .then(id => ({id: id[0]}));
};

// GET for retrieving a project by its id that returns an object with special structure
function getProject(id) {
    return db('projects as p')
        .leftJoin('actions as a', 'p.id', 'a.project')
        .select('p.id as projectId', 'p.name', 'p.description as projectDescription', 'p.completed as projectCompleted', 'a.id as actionId', 'a.description as actionDescription', 'a.notes', 'a.completed as actionCompleted')
        .where('p.id', id)
        .then(table => {
            if(table.length){
                const resObj = {
                    id: table[0].projectId,
                    name: table[0].name,
                    description: table[0].projectDescription,
                    completed: table[0].projectCompleted,
                    actions: []
                };

                if(table[0].actionId){
                    table.forEach(row => {
                        resObj.actions.push({
                            id: row.actionId,
                            description: row.actionDescription,
                            notes: row.notes,
                            completed: row.actionCompleted
                        });
                    });
                };
                return resObj;
            } else {
                return table;
            }
        })
}