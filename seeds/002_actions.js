exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          description: "Build a Node App",
          notes: "Needs to be done asap",
          project_id: 1
        },
        {
          id: 2,
          description: "Build a React APP",
          notes: "Must be done in 2 weeks",
          project_id: 2
        },
        {
          id: 3,
          description: " Build a SQL database",
          notes: "Call the customer",
          project_id: 3
        }
      ]);
    });
};
