
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'work'},
        {id: 2, context: 'home'},
        {id: 3, context: 'out & about'}
      ]);
    });
};
