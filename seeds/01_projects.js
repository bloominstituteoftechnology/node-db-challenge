exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'RDBMS Sprint',
          description: 'Lambda School SQL/Knex challenge',
          actions: '[1, 2, 3]'
        },
        { id: 2, name: 'Side Project', actions: '[1]' }
      ]);
    });
};
