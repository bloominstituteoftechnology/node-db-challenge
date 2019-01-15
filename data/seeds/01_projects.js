exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Best Friend Finder",
          description:
            "This is a new age app where people are looking for a best friend above anthing else.",
          completed: 0
        },
        {
          name: "Recipe App",
          description:
            "Create and share your recipes with all users and add ingredients to a shopping list you can print out.",
          completed: 0
        },
        {
          name: "Projects App",
          description:
            "This app allows people to build and collaborate on different projects.",
          completed: 0
        }
      ]);
    });
};
