
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'First', description: "This is project 1."},
        {id: 2, name: 'Second', description: "This is project 2."},
        {id: 3, name: 'Third', description: "This is project 3."}
      ]);
    });
};
