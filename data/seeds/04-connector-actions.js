
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connector_actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('connector_actions').insert([
        { action_id: 1, connector_id: 1 },
        { action_id: 1, connector_id: 2 },
        { action_id: 1, connector_id: 3 },
        { action_id: 2, connector_id: 1 },
        { action_id: 2, connector_id: 2 },
        { action_id: 2, connector_id: 3 },
        { action_id: 3, connector_id: 1 },
        { action_id: 3, connector_id: 2 },
        { action_id: 3, connector_id: 3 },
      ]);
    });
};
