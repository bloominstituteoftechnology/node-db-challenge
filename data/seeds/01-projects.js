
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Note Taking App', description: 'Create through React', completed: false},
        {name: 'Blog', description: 'Create through HTML/CSS/JS', completed: false},
        {name: 'Weather App', description: 'Create through React-Redux', completed: true}
      ]);
    });
};
