exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "Node Project", description: "Build a Node App" },
        { id: 2, name: "React Project", description: "Build a React APP" },
        { id: 3, name: "SQL Project", description: " Build a SQL database" }
      ]);
    });
};
