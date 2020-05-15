
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Eat Cake'},
        {id: 2, project_name: 'Build Skyscraper'},
        {id: 3, project_name: 'Save the Whales'}
      ]);
    });
};
