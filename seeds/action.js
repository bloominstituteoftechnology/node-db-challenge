
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_id: 11, action_description: "stuff", action_notes: "more stff", action_completed: true, project_id: 11},
        {action_id: 12, action_description: "work", action_notes: "mental work out", action_completed: false, project_id: 11},
      ]);
    });
};
