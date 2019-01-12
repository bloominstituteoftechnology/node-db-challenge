exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Clean', description: 'Clean up room', completed: 1 },
        { project_name: 'Cook', description: 'Cook dinner for family', completed: 0 },
        { project_name: 'Study', description: 'Study for sprint', completed: 0 },
      ]);
    });
};
