exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          name: "Find sponge",
          description: "How long do sponges last?",
          complete: true
        }
      ]);
    });
};
