
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Build fire', project_description: 'Make wood heat up real good.', completed: false},
        {id: 2, project_name: 'Set tent', project_description: 'Build a shelter.', completed: false},
        {id: 3, project_name: 'Make food', project_description: 'Prepare a nice meal.', completed: false},
      ]);
    });
};