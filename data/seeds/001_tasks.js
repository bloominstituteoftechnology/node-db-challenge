exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Weekday Running",
          notes: "run every day from Mon to Thu",
          completed: false,
          project_id: 2
        },
        {
          description: "Weekday meditating",
          notes: "meditate every day from Mon to Thu",
          completed: false,
          project_id: 3
        },
        {
          description: "Weekday writing",
          notes: "wr9te every day from Mon to Thu",
          completed: false,
          project_id: 1
        },
        {
          description: "Write a technical blog post",
          notes: "write and publish on Medium",
          completed: false,
          project_id: 1
        },
        {
          description: "Pilates",
          notes: "",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
