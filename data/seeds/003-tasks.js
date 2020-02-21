exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "project 1 task",
      completed: false,
      project_id: 1
    },
    {
      description: "project 2 task",
      completed: true,
      project_id: 2
    }
  ]);
};
