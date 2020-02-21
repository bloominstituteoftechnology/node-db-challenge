exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "Task 1",
      description: "project 1 task",
      completed: false,
      project_id: 1
    },
    {
      name: "Task 2",
      description: "project 2 task",
      completed: true,
      project_id: 2
    }
  ]);
};
