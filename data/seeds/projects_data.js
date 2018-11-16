exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'APOD API front end', description: 'Create a front end for the APOD API' },
        { name: 'GraphQL Practice', description: 'Follow the tutorial for a GraphQL project' },
        { name: 'SacHacks Prep', description: 'Prepare for the hackathon' }
      ]);
    });
};