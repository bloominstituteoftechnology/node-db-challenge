
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'second action', notes: 'second action', completed: true, project_id: 2},
        {description: 'third action', notes: 'third action', completed: false, project_id: 3},
        {description: 'first action', notes: 'first action', completed: true, project_id: 1}
      ]);
    });
};
