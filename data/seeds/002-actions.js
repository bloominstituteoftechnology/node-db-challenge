
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          project_id: 1,
          description: 'Make frequent commits',
          notes: 'Don\'t forget!',
          completed: true
        }
      ]);
    });
};
