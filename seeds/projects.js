exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "DB Challenge",
          project_description: "Complete Sprint Challenge",
          project_completed: false
        },
        {
          project_name: "Learn New Language",
          project_description: "Learn a new programing language",
          project_completed: true
        }
      ]);
    });
};
