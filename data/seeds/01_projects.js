exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Complete Sprint Challenge',
          description: 'Complete sprint challenge for Lambda School',
        },
        { name: 'Clean House' },
      ]);
    });
};
