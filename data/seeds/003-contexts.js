
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        { id: 1, name: 'at Home'}
      ]);
    });
};
