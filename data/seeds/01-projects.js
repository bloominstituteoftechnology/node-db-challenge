
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project: 'React Apple Nav', description: 'React Apple Nav', complete: false },
        { project: 'React Smurfs', description: 'React Smurfs', complete: false },
        { project: 'React Instagram', description: 'React Instagram', complete: true },
      ]);
    });
};
