const db = require("./connect.js");






function getProjects(){
    return db('projects')
  }
  

function getProject(id){
    if (id) {
    return db('projects')
      .where({ id })
      .first()
  } else {
    return db('projects')
  }
  }
  


function postProject(id) {
    return db('projects')
    .insert(project)
    .then(ids => {
      return get(ids[0])
    })


  }


  function getTasks(){
    return db('tasks')
  }


  function getTask(id){
 if (id) {
    return db('tasks')
      .where({ id })
      .first()
  } else {
    return db('tasks')
  }

  }
  

  function postTask(id) {
return db('tasks')
    .insert(task)
    .then(ids => {
      return get(ids[0])
    })

  }



function getRecources(){
    
    return db('resources')
  }
  


function getRecource(id){
    
    if (id) {
    return db('resources')
      .where({ id })
      .first()
  } else {
    return db('resources')
  }
  }
  



  function postRecource(id) {
   
    
    return db('resources')
    .insert(resource)
    .then(ids => {
      return get(ids[0])
    })



  }



  module.exports = {
    getRecources,
    getRecource,
    postRecource,
    getTasks,
    getTask,
    postTask,
    getProject,
    getProjects,
    postProject
  }