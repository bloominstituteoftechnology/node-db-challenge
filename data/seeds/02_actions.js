
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1, 
          desc: 'action description', 
          notes: 'the action notes',
          completed: 0,
          proj_id: 1
        },
        {
          id: 2, 
          desc: 'another action description',
          notes: 'some more action notes',
          completed: 0,
          proj_id: 1
        }
      ]);
    });
};
