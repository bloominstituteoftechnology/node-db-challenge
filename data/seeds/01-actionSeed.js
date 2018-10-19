
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'example action description 1' , action_notes: 'example action note 1' , action_completed: false , projects_id: '1'},
        {action_description: 'example action description 2' , action_notes: 'example action note 2' , action_completed: false , projects_id: '1'},
        {action_description: 'example action description 3' , action_notes: 'example action note 3' , action_completed: false , projects_id: '2'},
      ]);
    });
};