exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "sign up for email list",
          notes: "task 1",
          project_id: 1
        },
        {
          description: "do the task 1",
          notes: "task 2",
          project_id: 2
        }
      ]);
    });
};
