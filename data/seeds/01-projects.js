
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Build a go-cart',
          'description': 'You have a budget of $500.00 dollars to build a go cart'
        },
      ]);
    });
};
