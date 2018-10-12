
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions_context').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions_context').insert([

        //I need to find the worlds best teacher
        {action_id: 1, context_id: 1 },
        {action_id: 1, context_id: 3 },

        //I need to train
        {action_id: 2, context_id: 2 },
        {action_id: 2, context_id: 3 },
        {action_id: 2, context_id: 4 },
        {action_id: 2, context_id: 5 },

        //I need to get a utility belt
        {action_id: 3, context_id: 1 },
        {action_id: 3, context_id: 3 },

      ]);
    });
};
