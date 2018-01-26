
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'context1'},
        {id: 2, context: 'context2'},
        {id: 3, context: 'context3'}
      ]);
    });
};
