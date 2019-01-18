const db = require('../dbConfig.js');

module.exports = {

  getProjects() {

    let query = db('projects');
    return query;
  },

  getProject(id) {

    let project = db('projects').where({id})
    let actions = db('actions').where({project_id: id})

    return Promise.all([project, actions]).then(results => {
      const [project, actions] = results;
      return {...project, actions: [...actions]};
    })
  },

  createProject({name, description, completed = false}){

    let query = db('projects');
    return query.insert({name, description, completed});
  },
}
