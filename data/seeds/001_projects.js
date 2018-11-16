
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Learn Express', description: 'Learn how to make a backend with express', completed: false },
        { name: 'Learn Python', description: 'Learn Python and Django', completed: false },
        { name: 'Learn React', description: 'Learn basic React ', completed: true },
      ]);
    });
};
