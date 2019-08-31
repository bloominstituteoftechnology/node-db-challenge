
exports.seed = function(knex) {
  return knex('resources').insert([
        {
          resources_name: 'How-to',
          description: 'How to build tree house projects'
        },
        {
          resources_name: 'Google',
          description: 'How to build a Mancave.'
        }
    ]);
};
