
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, name: 'At Home'},
        {id: 2, name: 'At Work'},
        {id: 3, name: 'During freetime'}
      ]);
    });
};
