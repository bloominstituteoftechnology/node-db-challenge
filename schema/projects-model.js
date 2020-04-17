const db = require('../data/db-config.js');

// Build an API with endpoints for:
// adding resources.
// retrieving a list of resources.
// adding projects.
// retrieving a list of projects.
// adding tasks.
// retrieving a list of tasks. The list of tasks should include the project name and project description.

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks,
    getById
}

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function getById(id) {
    let query = db('projects');
    if (id) {
      return query
        .where({ id })
        .join('Tasks', 'Tasks.project_id', 'Projects.id')
        .insert({tasks: 'Tasks'})
        // .join('Resources', 'Resources.project_id', 'Projects.id')
        // .first()
        .then((project) => {
          if (project) {
            console.log(project, ' is project!')
            // query.insert({tasks: 'Tasks'})
            return query
          } else {
            return null;
          }
        });
    }
}

function getTasks(project_id) {
    return db('tasks')
        .select('Projects.name as Project', 'Projects.description as ProjectDescription', 'Tasks.description as Task')
        .join('Projects', 'Task.project_id', 'Projects.id')
        .where(project_id = 'Tasks.project_id')
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => getProjects())
}

function addResource(resource) {
    return db('resources')
        .insert(resource, 'id')
        .then(([id]) => getResources())
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => getTasks())
}
