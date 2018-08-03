const db = require('../data/db');
const mappers = require('./mappers');



module.exports = {
    get: function(id) {
        let query = db('projects as p');
    
        if (id) {
          query.where('p.id', id).first();
    
          const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]
    
          return Promise.all(promises).then(function(results) {
            let [project, actions] = results;
            project.actions = actions;
    
            return mappers.projectToBody(project);
          });
        }
    
        return query.then(projects => {
          return projects.map(project => mappers.projectToBody(project));
        });
      },

      getProjectActions: function(projectId) {
        return db('actions')
          .where('project_id', projectId)
          .then(actions => actions.map(action => mappers.actionToBody(action)));
      },
}