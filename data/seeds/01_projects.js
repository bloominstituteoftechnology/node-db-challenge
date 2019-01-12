
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Complete a stretch goal', description: 'Create Seed Data'},
        {name: 'Birthday Wishes', description: 'Tell your nephew happy birthday!'},
        {name: 'PM Mystery', description: 'See what Mykeal has been up to'}
      ]);
    });
};
