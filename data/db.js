const db = require('../dbConfig');

module.exports = {
  addProject:function(project) {
    return db('projects')
      .insert(project);
  },
  addAction:function(action){
    return db('actions')
      .insert(action);
  },
  getProjectByID:function(id){
    return db('projects').where('id',id)
  }
}

