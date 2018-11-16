
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Sprint-Challenge-RDBMS',
          description: 'something to work on to finish out the week and get ready for a break.',
          complete: false}
      ]);
    });
};
