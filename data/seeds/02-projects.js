
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'School', decription: "Lamdba tasks"},
        {name: 'Climbing', decription: "climbing goals and tasks"},
      ]);
    });
};
