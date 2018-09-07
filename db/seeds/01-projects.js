exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("projects")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          {
            project_name: "Shoot Baskets",
            project_description: "Shoot baskets at the gym.",
            project_completed: false,
          },
          {
            project_name: "Cut Grass",
            project_description: "Mow the lawn.",
            project_completed: false,
          },
          {
            project_name: "Play Fortnite",
            project_description: "Get a dub in Fortnite.",
            project_completed: true,
          },
        ]);
      })
  );
};
