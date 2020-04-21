const db = require('../data/dbConfig.js');

function getProjects(){
    return db('project').then(response =>{
        response.forEach(project =>{
            project.project_completed = !!project.project_completed;
        })
        return response;
     })
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
    return db('project').insert({project_name: project.name, project_description: project.description})
    .then(response =>{
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}

function addResources(resource){
    return db('resource').insert({resource_name: resource.name, resource_description: resource.description})
    .then(response =>{
        return response;
    })
    .catch(err =>{
        console.log(err);
        return null;
    })
}

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

function addTasks(task, project_id){
    return db('task').insert({task_description: task.description, notes: task.notes, project_id: project_id})
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
    return db('project').where('project.id', '=', project_id).then(project =>{
        project.forEach(project =>{
            project.project_completed = !!project.project_completed;
        })
        return db('task').where('task.project_id', '=', project_id).then(tasks =>{
            tasks.forEach(task =>{
                task.task_completed = !!task.task_completed;
            })
            project.tasks = tasks
            return db.select('resource.resource_name', 'resource.resource_description', 'resource.id').from('project')
            .where('project.id', '=', project_id)
            .join('resource_detail', 'resource_detail.project_id', '=', 'project.id')
            .join('resource', 'resource_detail.resource_id', '=', 'resource.id')
            .then(resources =>{
                project.resources = resources
                console.log(project)
                return project;
            })
            .catch(err =>{
                console.log(err);
                return null;
            })
        })
        .catch(err =>{
            console.log(err);
            return null;
        })
    })
    .catch(err =>{
        console.log(err);
        return null;
    }) 
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