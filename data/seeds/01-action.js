
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { description: 'Action 1', notes: 'Notes - Action 1', completed: true },
        { description: 'Action 2', notes: 'Notes - Action 2', completed: false },
        { description: 'Action 3', notes: 'Notes - Action 3', completed: true },
      ]);
    });
};
