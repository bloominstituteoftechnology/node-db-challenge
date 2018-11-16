
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project: 'Homework', description: 'never stops', completed: false },
        { project: 'Work on house', description: 'get it done', completed: false },
        { project: 'Build table', description: 'finish soon', completed: false }
      ]);
    });
};