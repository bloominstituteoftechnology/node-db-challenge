
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sprint Challenge', description: 'In this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database.', completed: false},
        {name: 'Drive to Davidson', description: 'Weekend, baby!', completed: false},
        {name: 'Horseback Ride', description: 'Time to ride Chippendale!', completed: false}
      ]);
    });
};
