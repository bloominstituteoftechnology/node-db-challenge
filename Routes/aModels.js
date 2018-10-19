const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    get: function(id) {
      let query = db('actions');
  
      if (id) {
        return query
          .where('id', id)
          .first()
          .then(action => mappers.actionToBody(action));
      }
  
      return query.then(actions => {
        return actions.map(action => mappers.actionToBody(action));
      });
    },
    insert: function(action) {
      return db('actions')
        .insert(action)
        .then(([id]) => this.get(id));
    },
    update: function(id, changes) {
      return db('actions')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
    },
    remove: function(id) {
      return db('actions')
        .where('id', id)
        .del();
    },
    find() {
        return db('actions');
    },
    getProjectActions: function(id) {
      return db("actions").where({ id });
    },
};

// module.exports = {
//   find,
//   findById,
//   add,
//   update,
//   remove,
// };


// function findById(id) {
//   return db('projects')
//     .where({ id })
//     .first();
// }

// function add(project) {
//   return db('projects')
//     .insert(project)
//     .into('projects');
// }

// function update(id, changes) {
//   return db('projects')
//     .where({ id })
//     .update(changes);
// }

// function remove(id) {
//   return db('projects')
//     .where({ id })
//     .del();
// }

// function(id) {
//   let query = db('projects as p');

//   if (id) {
//     query.where('p.id', id).first();

//     const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

//     return Promise.all(promises).then(function(results) {
//       let [project, actions] = results;
//       project.actions = actions;

//       return mappers.projectToBody(project);
//     });
//   }
