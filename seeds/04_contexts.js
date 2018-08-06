
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Contexts').insert([
        {
          id: 1,
          name: "Townhouse",
        },
        {
          id: 2,
          name: "Treehouse",
        },
        {
          id: 3,
          name: "Tiny House",
        },
        {
          id: 4,
          name: "Single Family Rambler",
        },
      ]);
    });
};
