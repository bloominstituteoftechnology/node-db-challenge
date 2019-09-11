
exports.seed = function(knex) {
  return knex('resources').insert([
        {
          resource_name: 'How-to',
          description: 'How to build tree house projects',
          project_id: 2
        },
        {
          resource_name: 'Google',
          description: 'How to build a Mancave.',
          project_id: 1
        }
    ]);
};
