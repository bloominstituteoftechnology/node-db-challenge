
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'bootstrap app with express, react and redux', project_id: 1},
        {id: 2, description: 'build presentational frontend', project_id: 1},
        {id: 3, description: 'define user routes', project_id: 1},
        {id: 4, description: 'bootstrap app with express, react and redux', project_id: 2},
        {id: 5, description: 'build presentational frontend', project_id: 2},
        {id: 6, description: 'build wireframe based on clients needs', project_id: 3}
      ]);
    });
};
