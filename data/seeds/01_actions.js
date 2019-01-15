exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "testing this stuff",
          notes: "none for the test",
          project_id: "1"
        },
        {
          description: "OKay, so it might be working at this point",
          notes: "none for the test",
          project_id: "2"
        },
        {
          description: "testing out the app for bugs",
          notes: "none for the test",
          project_id: "3"
        },
        {
          description: "2nd action of project",
          notes: "none for the test",
          project_id: "1"
        }
      ]);
    });
};
