var faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          project_id: 1,
          description: faker.hacker.phrase(),
          notes: faker.random.words()
        },
        {
          id: 2,
          project_id: 1,
          description: faker.hacker.phrase(),
          notes: faker.random.words()
        },
        {
          id: 3,
          project_id: 1,
          description: faker.hacker.phrase(),
          notes: faker.random.words()
        }
      ]);
    });
};
