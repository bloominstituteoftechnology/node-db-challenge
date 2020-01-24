
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Project one',
          description: 'creating databases',
          completed: false,
        },

        {
          name: 'Project two',
          description: 'editing databases',
          completed: false,
        },
        
      ]);
    });
};
