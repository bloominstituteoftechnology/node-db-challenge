
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, contexts: 'home'},
        {id: 2, contexts: 'kitchen'},
        {id: 3, contexts: 'coffee shop'}
      ]);
    });
};
