
exports.seed = function(knex, Promise) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          name: "Another project",
          description: "Project description",
          complete: false
        },
        {
          name: "Yet another project",
          description: "Project description",
          complete: false
        },
        {
          name: "One more project",
          description: "Project description",
          complete: false
        }
      ]);
    });
};
