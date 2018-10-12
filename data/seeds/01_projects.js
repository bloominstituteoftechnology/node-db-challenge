exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Project One",
          description: "This is Project One",
          completed: true
        },
        {
          name: "Project Two",
          description: "This is Project Two",
          completed: false
        },
        {
          name: "Project Three",
          description: "This is Project Three",
          completed: false
        }
      ]);
    });
};
