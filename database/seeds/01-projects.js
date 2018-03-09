
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Washing Dishes', description: 'finish washing sink of dishes', completed: false },
        {id: 2, name: 'Read 1984', description: 'read 1984 by George Orwell', completed: false},
        {id: 3, name: 'Home Renovation', description: 'renovate and remodel home', completed: false}
      ]);
    });
};
