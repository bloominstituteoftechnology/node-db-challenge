exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'project 1', description: 'desc 1', complete: false },
        { name: 'project 2', description: 'desc 2', complete: false },
        { name: 'project 3', description: 'desc 3', complete: false },
        { name: 'project 4', description: 'desc 4', complete: false },
        { name: 'project 5', description: 'desc 5', complete: false },
        { name: 'project 6', description: 'desc 6', complete: false }
      ]);
    });
};
