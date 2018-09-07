exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "Buy paint",
          notes: "The house would look good in hot pink",
          completed: false,
          project_id: 1
        },
        {
          description: "Purchase sod",
          notes: "Gotta buy a lot of the green stuff",
          completed: false,
          project_id: 2
        },
        {
          description: "Purchase pipes",
          notes: "Where can I even find these?",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
