exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'Read README.md',
          notes: 'Read very carefully',
          project_id: 1,
        },
        {
          description: 'Initialize project',
          notes: 'yarn init, knex init, add dependencies',
          project_id: 1,
        },
        {
          description: 'Write code',
          notes: 'You know what to do here',
          project_id: 1,
        },
      ]);
    });
};
