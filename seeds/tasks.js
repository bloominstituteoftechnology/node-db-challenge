exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          projects_id: 1,
          description: "start challenge",
          notes: "",
          completed: false
        },
        {
          projects_id: 2,
          description: "study",
          notes: "",
          completed: false
        },
        {
          projects_id: 2,
          description: "learn",
          notes: "",
          completed: false
        }
      ]);
    });
};
