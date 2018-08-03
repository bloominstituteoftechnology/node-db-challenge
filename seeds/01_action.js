exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { description: "read books", notes: "chapter 1-3", completed: false, project_id: 1 },
        { description: "watch more videos", project_id: 2 },
        { description: "learn firebase defaults", project_id: 3 }
      ]);
    });
};
