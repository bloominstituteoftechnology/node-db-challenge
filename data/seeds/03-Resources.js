
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resourceName: "Hotdog", resourceDescription: "It's Meaty" },
        { resourceName: "Bun", resourceDescription: "It's Bready" },
        { resourceName: "Computer", resourceDescription: "BeepBoop" },
        { resourceName: "Mouse", resourceDescription: "It's Fast" },
        { resourceName: "Keyboard", resourceDescription: "Click/Clack" }
      ]);
    });
};