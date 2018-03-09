
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'Home'},
        {id: 2, context: 'Work'},
        {id: 3, context: 'Narnia'},
      ]);
    });
};
