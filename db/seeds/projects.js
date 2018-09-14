
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'first project', description: 'first project', completed: false},
        {name: 'second project', description: 'second project', completed: true},
        {name: 'third project', description: 'third project', completed: false}
      ]);
    });
};
