exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'front end', description: 'notes project' },
        { name: 'back end', description: 'sql' },
        { name: 'node blog', description: 'express.js' }
      ]);
    });
};
