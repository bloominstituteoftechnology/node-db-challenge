
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Find a new divorce lawyer.', description: 'Look for an attorney who actually knows what he\'s doing.', completed: true},
        {name: 'Jump off a building with a parachute on.', description: 'Base jumping really is a thing.', completed: false},
        {name: 'Invest in gold and several mid-cap stocks.', description: 'Research on E*Trade.', completed: false}
      ]);
    });
};
