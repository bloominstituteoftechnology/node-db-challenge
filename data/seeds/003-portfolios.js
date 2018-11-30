
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolios')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('portfolios').insert([
        {portfolio_name: 'Music Portfolio'},
        {portfolio_name: 'Lambda School Portfolio'},
        {portfolio_name: 'Academic Portfolio'}
      ]);
    });
};
