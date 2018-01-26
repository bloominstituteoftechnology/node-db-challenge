exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {context: 'context1', projectId: 1},
        {context: 'context2', projectId: 2},
        {context: 'context3', projectId: 2},
        {context: 'context4', projectId: 3},
        {context: 'context5', projectId: 4},
        {context: 'context6', projectId: 5},
      ]);
    });
};
