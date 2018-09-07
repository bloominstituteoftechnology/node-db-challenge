exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "action description 1",
          notes: "action notes 1",
          project_id: 1
        },
        {
          description: "action description 2",
          notes: "action notes 2",
          project_id: 1
        },
        {
          description: "action description 3",
          notes: "action notes 3",
          project_id: 1
        }
      ]);
    });
};
