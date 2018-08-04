
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {
          id: 1,
          name: "4th Ave Downtown",
          description: "4 Story Townhouse in the City",
          completed: "True"
        },
          {
          id: 2,
          name: "Emerald Forest",
          description: "3 room Treehouse in the Forest",
          completed: "False"
        },
          {
          id: 3,
          name: "Jane Lane",
          description: "410 sqft Tiny House in the desert",
          completed: "True"
        },
      ]);
    });
};
