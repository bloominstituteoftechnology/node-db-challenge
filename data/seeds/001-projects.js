
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'build car', description: "put car together", completed: false},
        {name: 'build house', description: "put house together", completed: false},
        {name: 'fix boat', description: "fix fiberglass hull", completed: false}
      ]);
    });
};
