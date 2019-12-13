const db = require('../data/db-config')

module.exports = {
    findProjects,
    findResources,
    findTasksByProjectId,
    findProjectById,
    addProject,
    addResource,
    addTask

}

function findProjects() {
    return db("projects")
        .then(projects => {
            return projects.map(p => itemToBody(p));
    });
}

function findResources() {
    return db('resources')
}
function findTasksByProjectId (project_id) {
    return db ('tasks')
    .join('projects', 'projects.id', 'tasks, project_id')
    .where({ project_id: project_id })
    .select('p_name', 'p_description', 't_description', 't_note',
     'tasks.completed')
     .then(t => {
         return t.map(i => itemToBody(i))
     })
}

function findProjectById(id) {
    return (
      db("projects")
        .where({ id })
            .first().then(p => {
            return itemToBody(p);
        }) 
    );
  }
  function findResources() {
    return db("resources");
  }

  function addProject(project) {
    return db("projects")
      .insert(project, "id")
      .then(([id]) => {
        return findProjectById(id);
      });
  }
  
  function addResource(resource) {
    return db("resources")
      .insert(resource, "id")
      
  }
  
  function addTask(task, project_id) {
    return db("projects")
      .where({ id: project_id })
      .then(() => {
        return db("tasks")
          .insert(task)
          .then(() => {
            return findProjectById(project_id);
          });
      });
  }

  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function itemToBody(item) {
    return {
      ...item,
      completed: intToBoolean(item.completed)
    };
  }
  