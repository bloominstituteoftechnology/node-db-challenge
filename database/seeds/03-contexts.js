
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'Drawing card', project_id: 1, action_id: 1 },
        {id: 2, context: 'Calligraphy', project_id: 1, action_id: 2 },
        {id: 3, context: 'Coloring', project_id: 1, action_id: 3 },
        {id: 4, context: 'Front', project_id: 2, action_id: 4 },
        {id: 5, context: 'Back', project_id: 2, action_id: 5 },
        {id: 6, context: 'Bug Fix', project_id: 2, action_id: 6 },
        {id: 7, context: 'Deployment', project_id: 2, action_id: 7 },
        {id: 8, context: 'Cutting/Piecing', project_id: 3, action_id: 8 },
        {id: 9, context: 'Painting', project_id: 3, action_id: 9 },
      ]);
    });
};
