exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      name: "T1",
      description: "For P1",
      notes: "Notes for T1",
      completed: 0,
      project_id: 1
    },
    {
      name: "T2",
      description: "For T2",
      notes: "Notes for T2",
      completed: 1,
      project_id: 1
    }
  ]);
};
