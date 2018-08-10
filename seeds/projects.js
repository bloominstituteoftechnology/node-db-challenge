
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Backend Project',
          description: 'Make a functioning CRUD backend from scratch' },
        { name: 'Authentication Sprint',
          description: 'Show your newfound authentication skills' },
        { name: 'Python Intro',
          description: 'Do basic Python things with data' },
      ]);
    });
};
