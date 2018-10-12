exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Answer comprehension questions for sprint challenge",
          notes: "Use lambda school curriculum to answer the questions",
          complete: true
        },
        {
          project_id: 1,
          description: "Add migrate and seeds",
          notes: "Delete database in case of errors",
          complete: true
        },
        {
          project_id: 1,
          description: "Add API endpoints to return data from database",
          notes: "",
          complete: false
        }
      ]);
    });
};
