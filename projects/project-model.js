const db = require("../data/db-configs")

module.exports = {
    getProjectResources,
    getProjects,
    getProjectTask,
    findProject,
    addProject,
    addResource,
    addTask
}


// adding resources.
function addResource(resource){
    return db(resource, "id")
        .then(ids => {
            const [id] = ids;
            return db("project as p")
                .select("*")
                .join("resource as r", "p.id", "r.p_id")
                .where({id})
                .first();
        })
}

// retrieving a list of resources.
function getProjectResources(project_id){
    return db("project as p")
        .select("r.id", "r.name", "r.description")
        .join("resource as r", "p.id", "r.p_id")
        .where({id})
        .first();
}

// find project by id
function findProject(id){
    return db("project")
        .where({id})
        .first();
}

// adding projects.
function addProject(project){
    return db("project")
        .insert(project, "id")
        .then(ids => {
            const [id] = ids;
            return findProject(id)
        })
}

// retrieving a list of projects.
function getProjects(){
    return("project")
        .then(item => item.completed === 1 ? {completed: true} : {completed: false});
}

// adding tasks.
function addTask(task){
    return db(task, "id")
        .then(ids => {
            const [id] = ids;
            return db("project as p")
                .select("*")
                .join("task as t", "p.id", "t.proj_id")
                .where({id})
                .first()
        })

}

// retrieving a list of tasks. The list of tasks should include the project name and project description.
function getProjectTask(project_id){
    return db("project as p")
        .select("p.name", "p.description", "t.description", "t.notes", "t.completed")
        .join("task as t", "p.id", "t.proj_id")
        .then(item => item.completed === 1 ? {completed: true} : {completed: false});
}