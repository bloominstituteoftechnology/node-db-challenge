exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(() => knex('projects').insert([
      { name: 'POST for projects', description: 'Add POST for projects', completed: true },
      { name: 'POST for actions', description: 'Add POST for actions', completed: true },
      {
        name: 'GET for project by id',
        description: 'Add GET for project by id',
        completed: false,
      },
    ]));
};
