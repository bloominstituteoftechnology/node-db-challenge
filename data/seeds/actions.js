exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { project_id: 1, description: "Build front end", notes: "Use React" },
        { project_id: 1, description: "Build back end", notes: "Use Node.js" },
        {
          project_id: 1,
          description: "Host the application",
          notes: "Use Herroku and Netlify"
        }
      ]);
    });
};
