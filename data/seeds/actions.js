
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, notes: 'Read Training kit material for Authentication', description: 'Study Authentication', is_complete: false},
        {id: 2, notes: 'Study JavaScript', description: 'Complete some code challenges', is_complete: true},
        {id: 3, notes: 'Test', description: 'Testing seeds', is_complete: false}
      ]);
    });
};
