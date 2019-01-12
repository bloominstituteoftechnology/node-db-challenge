
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "Complete Sprint", project_description: "Sprint on Jan. 12th", project_completed: false},
        {project_name: "Make Lunch", project_description: "Make myself a sandwich", project_completed: false},
      ]);
    });
};
