
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resources_name: 'stackoverflow', resources_description: 'ask for help/find similar questions'},
        {resources_name: 'w3schools', resources_description: 'rules & descriptions of each language'},
        {resources_name: 'codecademy', resources_description: 'do small coding projects'}
      ]);
    });
};
