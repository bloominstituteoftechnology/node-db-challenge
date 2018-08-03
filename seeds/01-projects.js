
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Complete RDBMS-API Spring Challegne',
        description:'Seed, Migrate, etc.'},
        {name: 'Break in the NSA', description: 'Use authentication to reach the backend of IMF'},
        {name: 'Create Sentience', description:'Python could be useful'}
      ]);
    });
};
