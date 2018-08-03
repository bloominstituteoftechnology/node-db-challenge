
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Project 1',
          description: 'Project 1 Description',
        },
        {
          id: 2, 
          name: 'Project 2',
          description: 'Project 2 Description',
          completed: false
        },
        {
          id: 3, 
          name: 'Project 3',
          description: 'Project 3 Description',
          completed: true
        }
      ]);
    });
};
