
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { action_description: 'chopping', action_notes: 'chopping, choppping, and cake decorating', project_id: 1 },
        { action_description: 'smash the stack', action_notes: 'smash the stack for fun and profit', project_id: 1 },
        { action_description: 'just do it', action_notes: 'DO IT! Just DO IT!', project_id: 1 }
      ]);
    });
};
