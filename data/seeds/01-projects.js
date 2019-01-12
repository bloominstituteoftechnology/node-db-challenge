
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Sprint Challenge', project_description: 'Complete MVP goals.', project_complete: false},
        {project_name: 'Wheelchair Ramp', project_description: "Build wheelchair ramp for mom.", project_complete: false}
      ]);
    });
};
