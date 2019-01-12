
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'Fork', action_notes: 'Fork repo', action_complete: true, project_id: 1},
        {action_description: 'Work', action_notes: 'Code or die', action_complete: false, project_id: 1},
        {action_description: 'Commit', action_notes: 'Submit commit with description', action_complete: true, project_id: 1},
        {action_description: 'Buy lumber', action_notes: 'Measure twice, cut once', action_complete: true, project_id: 2},
        {action_description: 'Frame ramp', action_notes: '1 turn in ramp', action_complete: true, project_id: 2},
        {action_description: 'Add rail', action_notes: 'Do not want mom to fall off ramp.', action_complete: false, project_id: 2}
      ]);
    });
};
