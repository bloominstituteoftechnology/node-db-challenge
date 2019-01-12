
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'create header',action_notes: '',action_completed: 0,project_id: 1},
        {action_description: 'create navigation',action_notes: 'use flex',action_completed: 1,project_id: 2},
        {action_description: 'create paragraphs',action_notes: '',action_completed: 0,project_id: 1},
        {action_description: 'create nav component',action_notes: 'navigation.js',action_completed: 1,project_id: 4},
        {action_description: 'create migrations',action_notes: '',action_completed: 0,project_id: 6},
        {action_description: 'create routers',action_notes: '2 router files',action_completed: 1,project_id: 5}
      ]);
    });
};
