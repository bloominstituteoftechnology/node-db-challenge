exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Introduction to Meditating", description: "book by Goenka" },
        { name: "RunningWorld", description: "runners reunite!" },
        { name: "On Writing", description: "book by Stephen King" },
        { name: "Pilates Studio", description: "in Sunnyvale" }
      ]);
    });
};
