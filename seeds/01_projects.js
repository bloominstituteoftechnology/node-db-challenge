
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'First', description: "This is project 1."},
        {name: 'Second', description: "This is project 2."},
        {name: 'Third', description: "This is project 3."}
      ]);
    });
};
