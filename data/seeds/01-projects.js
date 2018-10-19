exports.seed = function(knex, Promise) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          name: "Sprint Challenge: Week 12",
          description: "Challenge for the week",
          completed: false
        },
        {
          id: 2,
          name: "Sprint Challenge: Week 11",
          description: "Challenge for the week",
          completed: false
        }
      ]);
    });
}
