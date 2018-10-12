
exports.seed = function(knex, Promise) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        {
          "id": 1,
          "name": "Week 12 Sprint Challenge",
          "description": "Challenge for the week",
          "completed": 0
        },
        {
          "id": 2,
          "name": "Week 11 Sprint Challenge",
          "description": "Challenge for the week",
          "completed": 0
      }
      ]);
    });
};
