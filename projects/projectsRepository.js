const db = require('../configuration/db.js');

module.exports = {
  get: function(id) {
      let query = db('projects as p');

      if (id) {
        query
          .select('p.name')
          .where('p.id', id);
      }

    const promises = [query, this.getProjectActions(id), this.getProjectContexts(id)]; // [ projects, actions, contexts ]  
    
    return Promise.all(promises).then(function(results) {
      let [projects, actions, contexts] = results;
      let project = projects[0];
      project.actions = actions.map(a => a.description);
      project.contexts = contexts.map(c => c.context);    
      
      return project;
    });
  },
  getProjectActions: function(projectId) {
    return db('actions as a')
      .join('projectactions as pa', 'a.id', 'pa.actionId')
      .select('a.description')
      .where('pa.projectId', projectId)
      .then();
  },
  getProjectContexts: function(projectId) {
    return db('contexts as c')
      .join('projectcontexts as pc', 'c.id', 'pc.contextId')
      .select('c.context')
      .where('pc.projectId', projectId)
      .then();
  },
};

/*

select p.text, u.name, t.tag from posts p
join users u on p.userId = u.id
join posttags pt on p.id = pt.postId
join tags t on pt.tagId = t.id

*/