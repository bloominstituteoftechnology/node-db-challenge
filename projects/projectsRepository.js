const db = require('../configuration/db.js');

module.exports = {
  get: id => {
    let query = db('Projects as p');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  getFull: id => {
    if (!id) {
      return { error: new Error('id is required') };
    }
    query
      .join('Actions as a', 'p.id', 'ac.projectId')
      .select('p.* as project', 'a.* as actions')
      .where('p.id', id)
      .groupBy('project');
    const promises = [query, this.getProjectContexts(id)]; // [ posts, tags ]
    return Promise.all(promises).then(results => {
      let [projectsPlusActions, projectContexts] = results;
      let projectPlusActions = projectsPlusActions[0];
      const actionContexts = this.getActionContexts(
        projectPlusActions.actions.map(q => q.actions.id)
      );
      const distinctContexts = new Set(projectContexts);
      actionContexts.forEach(ac => {
        distinctContexts.add(ac);
      });
      projectPlusActions.contexts = distinctContexts.values;
      return projectPlusActions;
    });
  },
  getProjectContexts: id => {
    return db('Contexts cx')
      .join('ProjectsContexts as pc, pc.contextId, cx.id')
      .select('distinct cx.context as pcontext')
      .where('pc.projectId', id)
      .then();
  },
  getActionContexts: ids => {
    return db('Contexts cx')
      .join('ActionsContexts as ac', 'ac.contextId', 'cx.id')
      .select('distinct cx.context as acontext')
      .whereIn('ac.actionId', ids)
      .then();
  },
  post: (project) => {
    if (!project) return { error: new Error('project is required') };
    return db('Projects').insert(project)
          .then()
          .catch((err) => {
            return {error: new Error('insert error:' + err.message)}
          });   
  }
};
