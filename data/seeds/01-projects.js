exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "project 1",
          description: "project 1 description",
          completed: false
        },
        {
          name: "project 2",
          description: "project 2 description",
          completed: false
        }
      ]);
    });
};
