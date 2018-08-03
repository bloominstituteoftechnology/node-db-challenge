var faker = require("faker");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: faker.company.catchPhrase(),
          description: faker.company.bs()
        },
        {
          id: 2,
          name: faker.company.catchPhrase(),
          description: faker.company.bs()
        },
        {
          id: 3,
          name: faker.company.catchPhrase(),
          description: faker.company.bs()
        }
      ]);
    });
};
