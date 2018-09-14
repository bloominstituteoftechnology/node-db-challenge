
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 11, project_name: "Destroy", project_description: "Apocalypse", project_completed: false},
      ]);
    });
};
