
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: "Setup database and add dependencies", notes: 'express, knex, sqlite3, nodemon(dev)', completed: false, project_id:1},
        {description: "Create migrations/seeds for the database with knex. Setup endpoints for projects and actions.", notes: 'Refer to past projects if you get stuck.', completed: false, project_id:1},
        {description: "Clean the kitchen/wash the dishes.", notes: 'Use the swiffer for the kitchen floor.', completed: false, project_id:2},
        {description: "Do the laundry", notes: 'Fold clothes as soon as they dry.', completed: false, project_id:2},
      ]);
    });
};