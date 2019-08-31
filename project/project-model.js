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
    return db('task') 
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
    .then(ids=>{
        return findByID(ids[0])
    })
}

function findByPosts(id){
    return  db("task as t")
        .join('projects as p', 'p.id')
        .select('t.id', 't.description', 'p.name')
        .where({id})
    }

function findByID(id){
   return db('project').where({ id }).first()

}

function findByIDtask(id){
    return db('task')
 
 }

// function findByPosts(user_id){
// return  db("posts as p")
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'p.contents', 'u.username')
//     .where({user_id})
// }

// function add(resource){
//     return db('newUsers').insert(userData)
//     .then(ids=>{
//         return findByID(ids[0])
//     })
// }
// function add(task){
//     return db('newUsers').insert(userData)
//     .then(ids=>{
//         return findByID(ids[0])
//     })
// }
// function add(project){
//     return db('newUsers').insert(userData)
//     .then(ids=>{
//         return findByID(ids[0])
//     })
// }

// function update(changes, id){
//   return  db('users').where({ id }).update(changes)
//   .then(count=>{
//       return findByID(id);
//   })  
// }

// function remove(id){
//   return db('users').where({ id }).del()  
// }