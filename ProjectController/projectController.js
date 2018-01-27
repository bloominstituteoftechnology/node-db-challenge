const knex = require('../database/dbConfig');
 
module.exports = {
getProjects(id) {
    if (id) {
        const project = knex('projects').where({ id });
        const actions = knex('actions').where({ pId: id });
        const contextIds = knex('projectcontexts')
                            .where({ pId: id })
                            .select('cId')
                            .map(context => c.cId);
        const contexts = knex('contexts').whereIn('id', cIds);
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