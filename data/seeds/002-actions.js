
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, notes: 'This will be difficult', project_id: 1, description: 'Make people be not violent'},
        {id: 2, notes: 'This will be difficult', project_id: 1, description: 'Make people be not hungry'},
        {id: 3, notes: 'This will be difficult', project_id: 1, description: 'Make people be not greedy'}
      ]);
    });
};
