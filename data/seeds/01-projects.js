exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Complete Lambda School",
          project_description:
            "Pass all remaining sprints and build weeks. Get through Labs, CS and finally Lambda X.",
          project_completed: false
        },
        {
          id: 2,
          project_name: "Get a job",
          project_description: "Must...find...work...",
          project_completed: false
        },
        {
          id: 3,
          project_name: "Go back to Alaska",
          project_description: "Take another vacation to Alaska.",
          project_completed: false
        }
      ]);
    });
};
