const db = require('../data/db.js');
const mappers = require('./mappers.js');

module.exports = {
    get: function(id) {
        let query = db('project as p');
    
        if (id) {
          query.where('p.id', id).first();
    
          const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]
    
          return Promise.all(promises).then(function(results) {
            let [project, action] = results;
            project.action = action;
    
            return mappers.projectToBody(project);
          });
        }
    
        return query.then(project => {
          return project.map(project => mappers.projectToBody(project));
        });
      },

      getProjectActions: function(projectid) {
        return db('action')
          .where('project_id', projectid)
          .then(action => action.map(action => mappers.actionToBody(action)));
      },
}