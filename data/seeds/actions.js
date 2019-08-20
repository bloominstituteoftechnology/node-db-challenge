exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("actions")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("actions").insert([
          {
            project_id: 1,
            description: "do laundry",
            notes: "do not use bleach"
          },
          {
            project_id: 2,
            description: "math",
            notes: "finish multiplication tables"
          },
          {
            project_id: 2,
            description: "social studies",
            notes: "research Zambia"
          }
        ]);
      });
  };