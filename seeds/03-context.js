
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {id: 1, contexts: 'computer'},
        {id: 2, contexts: 'at home'},
        {id: 3, contexts: 'office'}
      ]);
    });
};
