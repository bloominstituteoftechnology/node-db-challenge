exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Migrate",
          description: "Make some migrations",
          completed: false
        },

        {
          name: "Seed",
          description: "Plant the seed",
          completed: false
        },

        {
          name: "Endpoint",
          description: "Game Over",
          completed: false
        }
      ]);
    });
};
