
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          "id": 1,
          "name": "Side project 1",
          "description": "Basic react app",
          "completed": "false"
      },
      {
          "id": 2,
          "name": "Side project 2",
          "description": "Fully styled react app with node backend",
          "completed": "false"
      },
      {
          "id": 3,
          "name": "Side project 3",
          "description": "Multi component react app with signin, auth and db on firebase",
          "completed": "false"
      }
      ]);
    });
};
