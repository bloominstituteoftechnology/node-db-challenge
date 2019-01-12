const db = require('../dbConfig.js');

module.exports = {
  addProject: function (project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
  addAction: function(action){
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
  },
  getProjectByID: function(id){
    return db('projects').Join('actions');
  }
}

