
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, notes: 'Read original McCarthy Paper', description: 'Summarize the paper'},
        {id: 2, notes: 'Study lambda calculus', description: 'Google Alonzo Church'},
        {id: 3, notes: 'Meta-program', description: 'Write your own addition function.'}
      ]);
    });
};
