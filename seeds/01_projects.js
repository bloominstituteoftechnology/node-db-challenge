exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 0, name: 'Home', description: 'Project for Home', iscomplete: 0},
        {id: 1, name: 'Car', description: 'Project for Car', iscomplete: 0},
        {id: 2, name: 'Work', description: 'Project for Work', iscomplete: 0},
      ]);
    });
};