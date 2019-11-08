
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'lambda training kit', description: 'lambda\'s online learning resources'},
        {id: 2, name: 'github', description: 'version management site' },
        {id: 3, name: 'magazines'}
      ]);
    });
};
