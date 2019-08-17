exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'How-to-book',
      description: 'How to build small wood projects.',
      project_id: (1, 2)
    },
    {
      resource_name: 'YouTube',
      description:
        'Step-by-step instructions on how to build build a bird house.',
      project_id: 1
    }
  ]);
};
