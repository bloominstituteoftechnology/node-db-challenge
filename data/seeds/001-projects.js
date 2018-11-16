
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Homestead', description: 'Build Da House'},
        {name: 'Dinner', description: 'Make Da Sketti'},
        {name: 'Broke Car', description: 'Busted Transmission'},
      ]);
    });
};
