exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Writing",
          description: "Write a page a day",
          completed: false
        },
        {
          name: "Exercising",
          description: "Running and Pilates",
          completed: false
        },
        {
          name: "Meditating",
          description: "Vipassana method",
          completed: false
        }
      ]);
    });
};
