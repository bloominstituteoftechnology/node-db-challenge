
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Roasted Turkey', description: 'Brined turkey w/o stuffing', completed: 0},
        {name: 'Pumpkin Pie', description: 'Custard based pie', completed: 1},
        {name: 'Wild Rice Stuffing', description: 'Made separate from turkey w/o bread', completed: 0}
      ]);
    });
};
