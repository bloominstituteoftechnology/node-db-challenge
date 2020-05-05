const db = require('../data/dbConfig.js');

function getProjects(){
     return db('project')
    // .then(response =>{
    //     response.forEach(project =>{
    //         project.project_completed = !!project.project_completed;
    //     })
    //     return response;
    //  })
}
function getResources(){
    return db('resource');
}
function getTasks(){
    return db
    .select('project.project_description', 'project.project_name', 'task.notes', 'task.task_description', 'task.task_completed')
    .from('task')
    .join('project', 'project.id', '=', 'task.project_id')
    .then(response =>{
        response.forEach(task =>{
            task.task_completed = !!task.task_completed;
        })
        return response;
    })
}
function addProject(project){
    return db('project').insert(project)
    .then(response =>{
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}
function addResources(resource){
    return db('resource').insert(resource)
    .then(response =>{
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}

// Added the ability for a resource to be assigned to a project

function addResourceToProject(resource_id, project_id){
    return db('resource_detail').insert({project_id: project_id, resource_id: resource_id })
    .then(response =>{
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}
////


function addTasks(task, id){
    return db('task').insert({...task, project_id:id})
    .then(response =>{
        console.log(response)
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}
function getProject(project_id){
    return db('project').where('id', project_id)
    // .then(project =>{
    //     project.forEach(project =>{
    //         // project.project_completed = !!project.project_completed;
    //         return project
    //     })
    //       return db('task').where('task.project_id', project_id)
    //       .then(tasks =>{
    //         tasks.forEach(task =>{
    //             // task.task_completed = !!task.task_completed;
    //             return task
    //         })
    //         project.tasks = tasks
    //         return db.select('resource.resource_name', 'resource.resource_description', 'resource.id').from('project')
    //         .where('project.id', project_id)
    //         .join('resource_detail', 'resource_detail.project_id', 'project.id')
    //         .join('resource', 'resource_detail.resource_id', 'resource.id')
    //         .then(resources =>{
    //             project.resources = resources
    //             console.log(project)
    //             return project;
    //         })
    //         .catch(err =>{
    //             console.log(err);
    //             return null;
    //         })
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         return null;
    //     })
    // })
    // .catch(err =>{
    //     console.log(err);
    //     return null;
    // }) 
 }
module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResources,
    addResourceToProject,
    addTasks,
    getProject
} 