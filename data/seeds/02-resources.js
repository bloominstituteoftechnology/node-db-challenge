
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'stackoverflow', description: 'ask for help/find similar questions'},
        {name: 'w3schools', description: 'rules & descriptions of each language'},
        {name: 'codecademy', description: 'do small coding projects'}
      ]);
    });
};
