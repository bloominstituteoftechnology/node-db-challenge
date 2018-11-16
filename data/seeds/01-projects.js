exports.seed = (knex, Promise) => {
  return knex('projects')
    .truncate()
    .then(() => {
      return knex('projects').insert([
        { name: 'project name here', description: 'the project description' }
      ]);
    });
};
