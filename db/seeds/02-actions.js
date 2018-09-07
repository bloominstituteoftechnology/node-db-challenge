
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'Go on Yelp and look for legal help.', notes: 'Maybe Yelp isn\'t the best place for this. Try Craigslist Kappa', completed: true},
        {project_id: 2, description: 'Buy a parachute.', notes: 'A red and white one', completed: false},
        {project_id: 2, description: 'Buy a harness.', notes: 'A red and blue one', completed: false},
        {project_id: 3, description: 'Some suggestions?', notes: 'AAPL or AMZ which are both large-cap', completed: true}
      ]);
    });
};
