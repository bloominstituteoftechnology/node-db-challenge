exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          proj_name: "project named #1",
          proj_descr: "this project is described thusly",
          proj_complete: false
        }
      ]);
    });
};
