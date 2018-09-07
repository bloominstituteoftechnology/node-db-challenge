
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Redux', notes: 'Use Redux for state management', project_id: 1},
        {id: 2, description: 'Vuex', notes: 'Vuex is cool too', project_id: 2},
        {id: 3, description: 'GraphQL', notes: 'GraphQL implementation into API', project_id: 3},
      ]);
    });
};
