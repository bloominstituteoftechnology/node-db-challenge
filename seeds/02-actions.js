
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1, 
          projectId: 1,
          description: 'Create a graph.',
          notes: 'Did this graph change your opinion?' 
        },
        {
          id: 2, 
          projectId: 2,
          description: 'Choose a physique goal.',
          notes: 'Nothing is impossible.'
        },
        {
          id: 3, 
          projectId: 3,
          description: 'Choose your portfolio layout',
          notes: 'Make sure to include everything, even the little things count.'
        }
      ]);
    });
};
