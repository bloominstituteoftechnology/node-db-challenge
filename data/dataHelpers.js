const db = require('./dbConfig.js')
const intToBool = (int) => int === 1 ? true : false;
module.exports = {
  addProject: (project) => {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }))
  },
  addAction: (action) => {
    return db('actions')
      .insert(action)
      .then(ids => ({ id: ids[0] }))
  },
  getProjectActions: (projectId) => {
    return db('actions as a')
      .select('a.id', 'a.description', 'a.notes', 'a.completed')
      .where('a.project_id', projectId)
      .then(actions => {
        actions = actions.map(a => ({...a, completed: intToBool(a.completed)}))
        return db('projects as p')
          .select('p.id', 'p.name', 'p.description', 'p.completed')
          .where('p.id', projectId)
          .then(project => ({
            ...(project[0]), 
            completed: intToBool(project.completed),
            actions
          }))
      })
  }
}