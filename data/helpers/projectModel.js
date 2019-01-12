const db = require('../dbconfig');
const mapper = require('./mapper.js')

module.exports = {
  get,
  getProjectActions,
  post,
}

function post(newProject) {
  return db('projects').insert(newProject);
}

function get(id) {
  let query = db('projects as p');

  if(id) {
    query.where('p.id', id).first();
    
    const promises = [query, getProjectActions(id)];
    
    return Promise.all(promises)
      .then( results => {
        let [project, actions] = results;
        project.actions = actions;

        return mapper.projectToBody(project)
      });
  }

  return query.then( projects => {
    return projects.map( project => mapper.projectToBody(project));
  });
};

function getProjectActions(projectId) {
  console.log(projectId)
  return db('actions').where('project_id', projectId)
    .then(actions => actions.map(action => mapper.actionToBody(action)))
}