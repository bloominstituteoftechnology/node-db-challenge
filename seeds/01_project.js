exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "read sql", description: "book" },
        { name: "study javascript", description: "redo lambda projects", completed: true },
        { name: "firebase", description: "watch udemy videos" }
      ]);
    });
};
