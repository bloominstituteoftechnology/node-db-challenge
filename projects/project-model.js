const db = require("../data/db-configs")

module.exports = {
    getProjectResources,
    getProjects,
    getProjectTasks,
    findProject,
    addProject,
    addResource,
    addTask
}




// adding resources.
function addResource(resource){
    return db("resource")
        .insert(resource)
        .then(ids => {
            const [id] = ids;
            return db("project")
                .where({id})
                .first();
        })
}

// retrieving a list of resources.
function getProjectResources(project_id){
    return db("project as p")
        .select("r.id", "r.name", "r.description")
        .join("resource as r", "p.id", "r.p_id")
        .where("r.p_id", project_id)
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
    return db("project")
}


// adding tasks.
function addTask(task){
    return db("task")
        .insert(task)
        .then(ids => {
            const [id] = ids;
            return db("task")
                .where({id})
                .first()
        })

}

// retrieving a list of tasks. The list of tasks should include the project name and project description.
function getProjectTasks(project_id){
    return db("project as p")
        .select("p.name", "p.description", "t.description", "t.notes", "t.completed")
        .join("task as t", "p.id", "t.proj_id")
        .where("t.proj_id", project_id)
}