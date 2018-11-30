exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Mow The Lawn", description: "mow the lawn", completed: false },
        { name: "Take Out The Trash", description: "take out the trash", completed: false },
        { name: "Brush Teeth", description: "brush teeth", completed: false },
        { name: "Take A Shower", description: "take a shower", completed: false }
      ]);
    });
};