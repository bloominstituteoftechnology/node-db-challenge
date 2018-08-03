exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions_contexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions_contexts').insert([
        {
          id: 1,
          a_id: 1,
          c_id: 1,
        },
        {
          id: 2,
          a_id: 1,
          c_id: 2,
        },
        {
          id: 3,
          a_id: 1,
          c_id: 3,
        },
        {
          id: 4,
          a_id: 2,
          c_id: 2,
        },
        {
          id: 5,
          a_id: 2,
          c_id: 3,
        },
      ]);
    });
};
