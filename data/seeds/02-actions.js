exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(() => knex('actions').insert([
      {
        description: 'action description',
        notes: 'action notes',
        completed: true,
        project_id: 1,
      },
      {
        description: 'action description 2',
        notes: 'action notes',
        completed: true,
        project_id: 2,
      },
      {
        description: 'action description 3',
        notes: 'action notes',
        completed: false,
        project_id: 3,
      },
    ]));
};
