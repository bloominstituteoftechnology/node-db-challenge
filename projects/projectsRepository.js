
const db = require('../configuration/db.js');

module.exports = {
  get: id => {
    let query = db('Projects as p');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  getFull: function(id) {
    if (!id) {
      return { error: new Error('id is required') };
    }
    let pquery = db('Projects as p').where('p.id', id);
    let aquery = db('Actions as a').where('a.projectId', id);
    const promises = [pquery, aquery, this.getProjectsContexts(id)]; // [ project, actions, contexts ]
    return Promise.all(promises).then(results => {
      const [projects, actions, projectContexts] = results;
      const project = projects[0];
      const distinctContexts = new Set(projectContexts.map(pc => pc.id));
      const actionsContexts = this.getActionsContexts(actions.map(a => a.id));
      return actionsContexts.then(contexts => {
        contexts.forEach(c => {
          distinctContexts.add(c.id);
        });
        return this.getContexts(Array.from(distinctContexts)).then(
          distinctContextsObject => {
            project.contexts = distinctContextsObject;
            project.actions = actions;
            return project;
          }
        );
      });
    });
  },
  getContexts: ids => {
    return db('Contexts as cx').whereIn('cx.id', ids).then();
  },
  getProjectsContexts: projectId => {
    return db('Contexts as cx')
      .join('ProjectsContexts as pc', 'cx.id', 'pc.contextId')
      .select('cx.id')
      .where('pc.projectId', projectId)
      .then();
  },
  getActionsContexts: actionIds => {
    return db('Contexts as cx')
      .join('ActionsContexts as ac', 'ac.contextId', 'cx.id')
      .select('cx.id')
      .whereIn('ac.actionId', actionIds)
      .then();
  },
  post: project => {
    if (!project) return { error: new Error('project is required') };
    const { name, description, completed = false, contextIds } = project;
    if (!name || !description)
      return { error: new Error('name and description are required') };
    return db('Projects')
      .insert({ name, description, completed })
      .then(newProductIds => {
        if (contextIds) {
          const projectId = newProductIds[0];
          project.contextIds.forEach(contextId => {
            db('ProjectsContexts')
              .insert({ projectId, contextId })
              .then()
              .catch(err => {
                return {
                  error: new Error(
                    'ProductsContexts insert failed:' + err.message
                  )
                };
              });
          });
        }
        return newProduct;
      })
      .catch(err => {
        return { error: new Error('insert error:' + err.message) };
      });
  },
  put: (id, completed) => {
    if (!id) {
      return { error: new Error('id is required') };
    }
    let pquery = db('Projects').update('completed', completed).where('id', id);
    let aquery = db('Actions').update('completed', completed).where('projectId', id);
    return Promise.all([pquery, aquery]).then(results => {
      return {completed: results}
    });
  }
};
