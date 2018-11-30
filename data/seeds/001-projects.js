
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {portfolio_id: 1, project_name: 'Hip-Hop', project_description: 'Create A Hip-Hop Album', completed: false},
        {portfolio_id: 2, project_name: 'Full Stack Web', project_description: 'Complete Repositories Until Your Fingers Bleed', completed: false},
        {portfolio_id: 2, project_name: 'Computer Science', project_description: 'Complete Theory In CS Until You Graduate', completed: false},
        {portfolio_id: 3, project_name: 'Get A Degree', project_description: 'Read Books Until Your Brain Undergoes Neurogenesis', completed: false}
      ]);
    });
};
