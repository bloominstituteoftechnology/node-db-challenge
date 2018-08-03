
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: 'Project 1', description: 'Description 1', complete: false },
        { name: 'Project 2', description: 'Description 2', complete: true },
        { name: 'Project 3', description: 'Description 3', complete: false }
      ]);
    });
};
