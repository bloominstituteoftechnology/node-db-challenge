exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Project One", description: "description for project one", completed: false },
        { name: "Project Two", description: "description for project two", completed: false },
        { name: "Project Three", description: "description for project three", completed: false },
        { name: "Project Four", description: "description for project four", completed: false }
      ]);
    });
};
