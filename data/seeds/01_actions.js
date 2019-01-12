
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'bootstrap app', notes: 'set up with express, react and redux', complete: 0, project_id: 1},
        {id: 2, description: 'build presentational frontend', notes: 'build landing page, post list, and post form', complete: 0, project_id: 1},
        {id: 3, description: 'define user routes', notes: 'set up CRUD routes', complete: 0, project_id: 1},
        {id: 4, description: 'bootstrap app', notes: 'set up with express, react and redux'', complete: 0, project_id: 2},
        {id: 5, description: 'build presentational frontend', notes: 'build landing page, notes list, and notes form', complete: 0, project_id: 2},
        {id: 6, description: 'build wireframe', notes: 'define basic layout based on clients needs', complete: 0, project_id: 3}
      ]);
    });
};
