exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          action_description: "Vacuum",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 1
        },
        {
          action_description: "Mop",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 1
        },
        {
          action_description: "Set up files",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 2
        },
        {
          action_description: "Code endpoints",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 2
        },
        {
          action_description: "Get towels, shampoo, and brush",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 3
        },
        {
          action_description: "Wash dog with shampoo",
          action_notes: "Lorem ipsum",
          action_is_complete: false,
          projectId: 3
        }
      ]);
    });
};
