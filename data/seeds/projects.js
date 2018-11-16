exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'RDBMS Sprint', description: 'Complete the sprint for RDBMS week', completed: false},
        {name: 'Authentication Sprint', description: 'Complete the sprint for Authentication week', completed: false}
      ]);
    });
};