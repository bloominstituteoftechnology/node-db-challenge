
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {description: 'blah1', notes: 'Don\'t kid yourself' },
        {description: 'blah2', notes: 'Spongebob' },
        {description: 'blah3', notes: 'Steve Austin' },
      ]);
    });
};
