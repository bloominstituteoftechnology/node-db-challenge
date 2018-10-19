
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Changes to truncate, for ID order history
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Reactjs', description: 'UI Render', completed: false},
        {name: 'Angularjs', description: 'Not sure howit works', completed: false},
        {name: 'Backbonejs', description: 'I would like to know why some people prefer it over Reactjs', completed: true}
      ]);
    });
};
