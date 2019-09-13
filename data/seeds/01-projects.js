exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "San Dieg",
      project_description: "2920 Zoo Dr, San Diego, CA 92101",
      completed: 0
    },
    {
      project_name: "San Jose",
      project_description: "2920 Zoo Dr, San Diego, CA 92101",
      completed: 0
    },
    {
      project_name: "SF",
      project_description: "2920 Zoo Dr, San Diego, CA 92101",
      completed: 0
    }
  ]);
};