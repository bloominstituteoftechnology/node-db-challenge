exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Choose Topic',
          description: 'Research topic choices',
          completed: true
        },
        {
          name: 'Topic Chosen',
          description: 'Begin Research',
          completed: true
        },
        {
          name: 'Gather Data',
          description: 'Organize information on topic',
          completed: false
        }
      ]);
    });
};
