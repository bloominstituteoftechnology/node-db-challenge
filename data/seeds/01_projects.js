exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "proj1", description: "proj1" },
        { id: 2, name: "proj2", description: "proj2" },
        { id: 3, name: "proj3", description: "proj3" }
      ]);
    });
};
