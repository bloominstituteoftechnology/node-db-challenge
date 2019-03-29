exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { project_id: 3, action_description: 'Create Schema', action_note: 'Create the elements needed in the database.', action_complete: true},
        { project_id: 1, action_description: 'Download Axios', action_note: 'Build API commands for crud operations.', action_complete: false},
        { project_id: 1, action_description: 'Create Components', action_note: 'Consider the structure when building Components', action_complete: false},
      ]);
    });
}; 