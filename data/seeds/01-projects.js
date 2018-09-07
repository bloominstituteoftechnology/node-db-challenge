exports.seed = (knex, Promise) => {
  return knex('projects').truncate()
    .then(() => {
      return knex('projects').insert([
        { name: 'A project', description: 'a project\'s desc.', completed: false },
        { name: 'Another project', description: 'another project\'s desc.', completed: false },
        { name: 'Yet another project', description: 'yet another project\'s desc.', completed: true }
      ]);
    });
};
