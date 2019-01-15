
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actioncontexts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actioncontexts').insert([
        {action_description: 'Conduct cluster analysis', action_id: 1, context_description: 'home', context_id: 1},
        {action_description: 'Conduct cluster analysis', action_id: 1, context_description: 'work', context_id: 2},
        {action_description: 'Content calendar', action_id: 2, context_description: 'home', context_id: 1},
        {action_description: 'Content calendar', action_id: 2, context_description: 'work', context_id: 2},
        {action_description: 'A/B testing', action_id: 3, context_description: 'work', context_id: 2},
        {action_description: 'A/B testing', action_id: 3, context_description: 'field', context_id: 3},
      ]);
    });
};
