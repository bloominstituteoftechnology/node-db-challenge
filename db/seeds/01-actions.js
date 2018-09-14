
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: '1', action_description: 'mirgate', notes: 'Use knex to create mirgrations', project_id: 1},
        {id: '2', action_description: 'seed', notes: 'Use knex to seed', project_id: 1},
        {id: '3', action_description: 'CRUD', notes: 'create api and make requests', project_id: 1},
        {id: '4', action_description: 'init', notes: 'CLI CRA', project_id: 2},
        {id: '5', action_description: 'drown', notes: 'stare listlessly', project_id: 2}
      ]);
    });
};
