
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'P1',
      description: 'Muhahahaha',
      completed: 0,
    },
  ]);
};
