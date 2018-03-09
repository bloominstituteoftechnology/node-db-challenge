
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contexts').insert([
        {context: 'Home'},
        {context: 'Office'},
      ]);
    });
};
