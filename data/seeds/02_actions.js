exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "Action One",
          notes: "This is Action One",
          completed: true,
          project_id: 2
        },
        {
          description: "Action Two",
          notes: "This is Action Two",
          completed: true,
          project_id: 2
        },
        {
          description: "Action Three",
          notes: "This is Action Three",
          completed: true,
          project_id: 2
        }
      ]);
    });
};
