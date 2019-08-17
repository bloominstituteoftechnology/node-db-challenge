exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'How-to-book',
      description: 'How to build small wood projects.'
    },
    {
      resource_name: 'YouTube',
      description: 'Step-by-step instructions on how to build a doll house.'
    }
  ]);
};
