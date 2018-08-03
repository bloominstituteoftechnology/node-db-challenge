
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, action: 'Going to fly', project_id: 1, note: 'Live', action_complete: true},
        {id: 2, action: 'Going to lift', project_id: 2,  note: 'Smile', action_complete: false},
        {id: 3, action: 'Going to ride', project_id: 3, note: 'Yell', action_complete: false}
      ]);
    });
};
