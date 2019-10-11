
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'build structure', notes: 'flexbox', completed: false, project_id: 1},//landing page
        {description: 'pick colors', notes: 'warm scheme', completed: false, project_id: 1},
        {description: 'design state management', notes: 'context api', completed: false, project_id: 2},//react app
        {description: 'routes', notes: 'see user flow', completed: false, project_id: 2},
        {description: 'design file structure', notes: 'group related data', completed: false, project_id: 3},//api
        {description: 'choose end points', notes: 'see requirements', completed: false, project_id: 3}
      ]);
    });
};
