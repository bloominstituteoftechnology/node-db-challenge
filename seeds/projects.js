exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "DB Challenge",
          description: "Complete Sprint Challenge"
        },
        {
          project_name: "Learn New Language",
          description: "Learn a new programing language"
        }
      ]);
    });
};
