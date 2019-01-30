
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'bla', notes: 'yep', action_complete: true, project_id: 1},
        {action_description: 'ble', notes: 'yup', action_complete: false, project_id: 2},
      ]);
    });
};
