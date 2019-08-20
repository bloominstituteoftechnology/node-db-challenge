exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("projects")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          { name: "Clean Room", description: "Clean your room" },
          { name: "Finish homework", description: "Math and Social Studies" }
        ]);
      });
  };