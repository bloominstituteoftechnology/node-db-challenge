
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          "id": 1,
          "description": "Build the product",
          "notes": "Reduce the feature set for the MVP",
          "completed": "false",
          "projectId": 1
      },
      {
          "id": 2,
          "description": "Talk to users",
          "notes": "Talk to them",
          "completed": "false",
          "projectId": 1
      }
      ]);
    });
};
