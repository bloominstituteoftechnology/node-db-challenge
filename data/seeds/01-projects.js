exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "Complete Lambda School",
          description:
            "Pass all remaining sprints and build weeks. Get through Labs, CS and finally Lambda X.",
          completed: false
        },
        {
          id: 2,
          name: "Get a job",
          description: "Must...find...work...",
          completed: false
        },
        {
          id: 3,
          name: "Go back to Alaska",
          description: "Take another vacation to Alaska.",
          completed: false
        }
      ]);
    });
};
