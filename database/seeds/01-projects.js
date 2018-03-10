
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Washing Dishes', project_description: 'finish washing sink of dishes', project_completed: false },
        {id: 2, name: 'Read 1984', project_description: 'read 1984 by George Orwell', project_completed: false},
        {id: 3, name: 'Home Renovation', project_description: 'renovate and remodel home', project_completed: false}
      ]);
    });
};
