
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_map').del()
    .then(function () {
      // Inserts seed entries
      return knex('action_map').insert([
        {id: 1, project_id: 1, action_id: 1},
      ]);
    });
};
