exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "Pass this sprint",
          task_notes: "must...hurry",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 2,
          task_description: "Work on resume",
          task_notes: "",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 3,
          task_description: "Apply for jobs",
          task_notes: "look for job openings",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 4,
          task_description: "Keep skills sharp!",
          task_notes: "continue practicing to code",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 5,
          task_description: "Plan time to go.",
          task_notes: "discuss options",
          task_completed: false,
          task_project_id: 3
        },
        {
          id: 6,
          task_description: "Buy tickets",
          task_notes: "need lots of money for this",
          task_completed: false,
          task_project_id: 3
        }
      ]);
    });
};
