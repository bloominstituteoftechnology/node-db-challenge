// t.increments('id');
// t.string('contexts', 32).unique('uq_context');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('context').insert([
        { id: 1, contexts: 'at home' },
        { id: 2, contexts: 'on a boat' },
        { id: 3, contexts: 'riding a frog' }
      ]);
    });
};
