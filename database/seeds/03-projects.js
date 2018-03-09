exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Lambda School', description: '', completed: false },
        { id: 2, name: 'UW', description: 'Class of 2012', completed: true },
      ]);
    });
};
