
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Migrate Projects',
          notes: 'Use knex make',
        },
        {
          project_id: 2,
          description: 'Add Seeds',
          notes: 'Knex seed:make',
        },
      ]);
    });
};
