
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions-to-notes-connection').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions-to-notes-connection').insert([
        {action_id: 1, note_id: 1},
        {action_id: 2, note_id: 2},
        {action_id: 2, note_id: 3},
        {action_id: 3, note_id: 4}
      ]);
    });
};
