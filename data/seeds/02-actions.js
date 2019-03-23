
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'Gather materials', action_notes: 'There are a few 2x4s outback', action_completed: false, project_id: 1},
        {action_description: 'Cut wood', action_notes: 'Measure twice cut once', action_completed: false, project_id: 1},
        {action_description: 'Just open the back door', action_notes: 'Make sure the gate is closed', action_completed: true, project_id: 2},
        {action_description: 'Listen to the best song this side of the Mississippi', action_notes: 'Where are the dogs', action_completed: false, project_id: 3},
      ]);
    });
};
