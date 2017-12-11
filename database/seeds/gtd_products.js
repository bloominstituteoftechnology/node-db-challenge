
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {name: "GTD", description: "Sprint-Challenge-RDBMS"},
        {name: "HouseClean", description: "Clean the the house"},
        {name: "Run", description: 'run 5k+'}
      ]);
    });
};
