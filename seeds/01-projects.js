exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project: "run copies",
      projectDescription:
        "Use copy machine to make copies of paper work, then file",
      completed: false
    },
    {
      project: "clean bathroom",
      projectDescription: "clean bathroom",
      completed: false
    },
    {
      project: "sweep parking lot",
      projectDescription: "sweep all 3 parking lots for trash",
      completed: false
    }
  ]);
};
