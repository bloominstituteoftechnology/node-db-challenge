exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Learn SQL', 
          description: 'Dive deeper into database relationships and complex queries'
        },
        {
          id: 2, 
          name: 'Create Portfolio Site',
          description: 'Use choo (https://choo.io) to create a sick portfolio site'
        },
        {
          id: 3, 
          name: 'Clean Room',
          description: 'Create a zen-like environment to work and relax in'
        }
      ]);
    });
};
