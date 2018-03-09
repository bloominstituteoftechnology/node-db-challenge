
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Whip', description: 'complete Nae Naeing', completed: false },
        { id: 2, name: 'Discover Planet', description: 'discover new planet', completed: false },
        { id: 3, name: 'Space Ship', description: 'build a space ship with lasers', completed: false }
      ]);
    });
};
