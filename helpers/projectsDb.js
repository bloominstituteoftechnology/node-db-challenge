const db = require('../data/dbConfig.js');

module.exports = {

  getProject: function(id) {
      return db('projects as p')
      .join('actions as a', 'a.projectId', 'p.id')
      .select('p.name as projectName', 'p.description as projectDescription', 'p.iscomplete as projectIsComplete', 'a.name as actionName', 'a.description as actionDescription', 'a.iscomplete as projectIsComplete',)
      .where('p.id', id);
  }
};