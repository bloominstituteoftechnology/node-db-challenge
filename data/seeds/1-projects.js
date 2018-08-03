
exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'project #1', description: 'a project', completed: false },
        { id: 2, name: 'project #2', description: 'another project', completed: false },
        { id: 3, name: 'project #3', description: 'yet another project', completed: false }
      ]);
    });
};
