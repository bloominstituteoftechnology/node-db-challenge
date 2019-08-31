const db = require('../data/db-config.js');

module.exports ={
    findProjects, 
    findResources,
    findTasks,
    addTask,
    addResource,
    addProject
};

function findProjects(){
   return db('projects')
   .then(projects =>
    projects.map(project => {
        if (project.complete == 1) {
            project.complete = true;
        } else project.complete = false;
        return project;
    })
);
}
function findResources(){
    return db('resource'); 
 }
 function findTasks(){
    return db('task as t')
        .join('projects as p', 't.id', 'p.id')
        .select('t.description', 't.notes', 't.completed', 'p.name', 'p.description') 
    .then(tasks =>
        tasks.map(task => {
            if (task.complete == 1) {
                task.complete = true;
            } else task.complete = false;
            return task;
        })
    );
 }

function addResource(resourceData){
    return db('resource').insert(resourceData)
    
}

function addTask(taskData){
    return db('task').insert(taskData)
    }


function addProject(projectData){
    return db('projects').insert(projectData)
}



