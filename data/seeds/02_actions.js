exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { id: 1, description: "description", notes: "notes", project_id: 1 },
        { id: 2, description: "description", notes: "notes", project_id: 1 },
        { id: 3, description: "description", notes: "notes", project_id: 2 },
        { id: 4, description: "description", notes: "notes", project_id: 3 }
      ]);
    });
};
