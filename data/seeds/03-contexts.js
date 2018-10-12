exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contexts").insert([
        { context: "Home" },
        { context: "Work" },
        { context: "School" }
      ]);
    });
};
