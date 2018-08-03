
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          project_id: 1, 
          description: 'Action 1', 
          notes: 'Action 1, for Project 1',
        },  
        {
          id: 2,
          project_id: 1, 
          description: 'Action 2', 
          notes: 'Action 2, for Project 1',
          completed: true
        },
        {
          id: 3,
          project_id: 2, 
          description: 'Action 3', 
          notes: 'Action 3, for Project 2',
          completed: false
        } 
      ]);
    });
};
