
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Sneak Exercise', description: 'Take More Steps, Do Squats, Lunges, Stretches'},
        {id: 2, name: 'Gift List', description: 'Keep notes of Xmas/Bday gifts for friends/family'},
        {id: 3, name: 'Save for Bahamas', description: 'Get raise, Spend Less'},
        {id: 4, name: 'Paint Bedrooms', description: 'Home Improvement', completed: true}
      ]);
    });
};
