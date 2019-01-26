
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'action 1', notes: 'action 1 notes', project_id: 1},
        {name: 'action 2', notes: 'action 2 notes', project_id: 1},
        {name: 'action 3', notes: 'action 3 notes', project_id: 1},
        {name: 'action 4', notes: 'action 4 notes', project_id: 2},
        {name: 'action 5', notes: 'action 5 notes', project_id: 2},
        {name: 'action 6', notes: 'action 6 notes', project_id: 3},
      ]);
    });
};
