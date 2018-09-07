exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("actions")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("actions").insert([
          {
            action_description: "Take 100 3's.",
            action_notes: "Make sure to shoot from all over the court",
            action_completed: false,
            project_id: 1,
          },
          {
            action_description: "Take 100 2's.",
            action_notes: "Layups and floaters",
            action_completed: false,
            project_id: 1,
          },
          {
            action_description: "Add Gas.",
            action_notes: "Add gas to lawnmower",
            action_completed: false,
            project_id: 2,
          },
          {
            action_description: "Hide.",
            action_notes: "Hide in bush.",
            action_completed: false,
            project_id: 3,
          },
        ]);
      })
  );
};
