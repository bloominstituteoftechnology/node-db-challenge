
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'second', notes: 'second', completed: true, action_id: 2},
        {description: 'third', notes: 'third', completed: false, action_id: 3},
        {description: 'first', notes: 'first', completed: true, action_id: 1}
      ]);
    });
};
