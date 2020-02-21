exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "project 1", description: "build a bridge" },
        { name: "project 2", description: "fight 100 ducks" },
        { name: "project 3", description: "fight 1 giant duck" }
      ]);
    });
};
