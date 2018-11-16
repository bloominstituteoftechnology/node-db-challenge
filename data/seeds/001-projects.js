
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Complete Gatsby refactor of UI project", description: "A list of additional goals", completed: false},
        {name: "Complete Pro Gatsby Course", description: "Watch videos and personalize project", completed: false},
      ]);
    });
};
