const knex = require('../database/dbConfig');

module.exports = {
  getProjects(id) {
    if (id) {
      const project = knex('projects').where({ id });
      const actions = knex('actions').where({ projectId: id });
      const contextIds = knex('projectscontexts')
                            .where({ projectId: id })
                            .select('contextId')
                            .map(context => c.contextId);
      const contexts = knex('contexts').whereIn('id', contextIds);
      return Promise.all([project, actions, contexts]).then((results) => {
        let [p, a, c] = results;
        let p = p[0];
        p.actions = a;
        p.contexts = c;
        return p;  
      });
    }
  }
};

