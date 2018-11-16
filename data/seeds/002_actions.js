
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {project_id: 1, description: 'Action 1 for Project 1', notes: 'Notes for Action 1', completed: 'false'},
        {project_id: 1, description: 'Action 2 for Project 1', notes: 'Notes for Action 2', completed: 'false'},
        {project_id: 2, description: 'Action 1 for Project 2', notes: 'Notes for Action 1', completed: 'false'},
        {project_id: 2, description: 'Action 2 for Project 2', notes: 'Notes for Action 2', completed: 'false'}
      ]);
    });
};
