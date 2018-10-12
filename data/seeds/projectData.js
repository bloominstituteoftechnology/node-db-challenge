
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Database build', description: 'Building a database', completed: false},
        {name: 'Front End site', description: 'Building a front end website', completed: false},
        {name: 'Eat Breakfast', description: 'Need some energy to keep coding', completed: true}
      ]);
    });
};
