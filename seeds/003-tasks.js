exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          task_description: "Submit assignment",
          task_notes: "Have to hurry and submit",
          task_completed: false,
          project_id: 1
        },
        {
          task_description: "Look into Material UI",
          task_notes: "Need to get familiar with styling libraries",
          task_completed: false,
          project_id: 2
        },
        {
          task_description: "Scrub the bathtub",
          task_notes: "How did I let it get this bad??",
          task_completed: false,
          project_id: 3
        },
        {
          task_description: "Wash the dishes",
          task_notes: "I'm disguisting :(",
          task_completed: false,
          project_id: 3
        },
        {
          task_description: "Research React shortcuts",
          task_notes: "Gotta get better at this",
          task_completed: false,
          project_id: 2
        },
        {
          task_description: "Plan 1:1 with TL",
          task_notes: "Hope I pass!",
          task_completed: false,
          project_id: 1
        }
      ]);
    });
};
