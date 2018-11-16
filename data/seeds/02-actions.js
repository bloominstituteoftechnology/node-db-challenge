exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "action 1 description",
          notes: "action 1 notes",
          completed: false,
          project_id: 1
        },
        {
          description: "raction 2 description",
          notes: "action 2 notes",
          completed: false,
          project_id: 1
        },
        {
          description: "action 3 description",
          notes: "action 3 notes",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
