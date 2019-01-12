
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {project_name: "Build chicken coop", project_description: "Create a fortified home for the precious birds", completed: 0},
        {project_name: "Bake a cake", project_description: "Make grandma happy by giving her a cake for her 71st birthday", completed: 0},
        {project_name: "Learn piano", project_description: "Gain a useful life skill to show off at parties", completed: 0},
      ]);
    });
};
