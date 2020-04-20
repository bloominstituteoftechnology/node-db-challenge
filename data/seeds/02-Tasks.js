exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex("tasks").insert([
    {
      taskDescription: "Migrate and Seed",
      taskNotes: "Yes",
      Completed: false,
      projectId: 2
    },
    {
      taskDescription: "Build an API",
      taskNotes: "Yes",
      Completed: false,
      projectId: 2
    },
    {
      taskDescription: "Buy Spicy Hot Dog",
      taskNotes: "Yes",
      Completed: true,
      projectId: 1
    },
    {
      taskDescription: "Eat Spicy Hot Dog",
      taskNotes: "Yes",
      Completed: false,
      projectId: 1
    }
  ]);
};