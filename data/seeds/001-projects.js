
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'landing page', description: 'sprint 1', completed:false},
        {project_name: 'react app', description: 'sprint 2', completed:false},
        {project_name: 'api', description: 'sprint 3', completed:false}
      ]);
    });
};
