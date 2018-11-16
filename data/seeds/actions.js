exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { description: "some description", notes: "some notes", completed: false, project_id: 1 },
        { description: "some description", notes: "some notes", completed: false, project_id: 1 }
      ]);
    });
};
