exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          projects_id: 1,
          task_description: "start challenge",
          notes: null,
          task_completed: false
        },
        {
          projects_id: 2,
          task_description: "study",
          notes: null,
          task_completed: false
        },
        {
          projects_id: 2,
          task_description: "learn",
          notes: null,
          task_completed: false
        }
      ]);
    });
};
