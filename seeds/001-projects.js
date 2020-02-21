exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          project_name: "Complete Node DB Sprint Challenge",
          project_description: "Reach MVP Requirements",
          project_completed: false
        },
        {
          project_name: "Finish side projects",
          project_description: "Continue completing portfolio projects",
          project_completed: false
        },
        {
          project_name: "Clean apartment",
          project_description: "It's a mess in here!!",
          project_completed: false
        }
      ]);
    });
};
