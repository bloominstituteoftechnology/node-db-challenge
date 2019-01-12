
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Conduct cluster analysis', notes: 'first pass excel', completed: false, project_id: 2},
        {description: 'Content calendar', notes: 'map out blog posts', completed: false, project_id: 3},
        {description: 'A/B testing', notes: 'implement signup mechanisms', completed: false, project_id: 4}
      ]);
    });
};
