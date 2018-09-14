exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "here is a test action",
          notes: "Complete this action by doing a list of things that I could type but I wont",
          completed: false,
          project_id: 1 
        },
        {
          description: "here is a test action",
          notes: "Complete this action by doing a list of things that I could type but I wont",
          completed: false,
          project_id: 1 
        },
        {
          description: "here is a test action",
          notes: "Complete this action by doing a list of things that I could type but I wont",
          completed: false,
          project_id: 2
        }
      ]);
    });
};
