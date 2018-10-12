exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "chopping",
          notes: "chopping, chopping and cake decorating",
          project_id: 1
        },
        {
          description: "smash the stack",
          notes: "smash the stack for fun and profit!",
          project_id: 1
        },
        {
          description: "just do it",
          notes: "DO IT! Just DO IT!",
          project_id: 1
        }
      ]);
    });
};
