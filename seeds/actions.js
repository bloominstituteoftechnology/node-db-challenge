
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'Hey, I am an action', project_id:1},
        {id: 2, description: 'Hey, I am also an action', project_id:1},
        {id: 3, description: 'Hey, I am the greatest action', project_id:2},
        {id: 4, description: 'No, no, hello. I am the one and only truly bestest action!', project_id:2},
      ]);
    });
};
