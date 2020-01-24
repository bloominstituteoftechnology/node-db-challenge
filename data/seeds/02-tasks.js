exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          description: "Pass this sprint",
          notes: "must...hurry",
          completed: "false",
          project_id: 1
        },
        {
          id: 2,
          description: "Work on resume",
          notes: "",
          completed: "false",
          project_id: 1
        },
        {
          id: 3,
          description: "Apply for jobs",
          notes: "look for job openings",
          completed: "false",
          project_id: 2
        },
        {
          id: 4,
          description: "Keep skills sharp!",
          notes: "continue practicing to code",
          completed: "false",
          project_id: 2
        },
        {
          id: 5,
          description: "Plan time to go.",
          notes: "discuss options",
          completed: "false",
          project_id: 3
        },
        {
          id: 6,
          description: "Buy tickets",
          notes: "need lots of money for this",
          completed: "false",
          project_id: 3
        }
      ]);
    });
};
