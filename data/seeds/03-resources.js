
exports.seed = function(knex) {
  return knex('resources').insert([
        {
          resources_name: 'How-to',
          description: 'How to build tree house projects',
          project_id: (1, 2)
        },
        {
          resources_name: 'Google',
          description: 'How to build a Mancave.',
          project_id: 1
        }
    ]);
};
