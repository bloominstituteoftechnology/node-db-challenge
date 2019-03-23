
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Workbench', project_description: 'Build a simple workbench out of 2x4s and 3/4" plywood' , project_completed: false},
        {project_name: 'Let the dogs out', project_description: 'The dogs are in and they must be let out', project_completed: true},
        {project_name: 'Who let the dogs out?', project_description: 'Get down to the popular 90s wrap song "Who let the dogs out"', project_completed: false}
      ]);
    });
};
