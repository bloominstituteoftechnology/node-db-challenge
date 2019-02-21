
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, description: 'Methods, and coding challenge for the day', name: 'Study JS', is_complete: true},
        {id: 2, description: 'Cook dinner without setting off the smoke alarm and ruining it', name: 'Cook Dinner', is_complete: true},
        {id: 3, description: 'Study the Training kit material', name: 'Study RDBMS', is_complete: false}
      ]);
    });
};
