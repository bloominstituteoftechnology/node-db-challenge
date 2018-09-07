exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contexts").insert([
        { context: "context 1" },
        { context: "context 2" },
        { context: "context 3" }
      ]);
    });
};
