exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Paint the house",
          description: "A really huge undertaking",
          completed: false
        },
        {
          name: "Lay the sod",
          description: "A massive task",
          completed: false
        },
        {
          name: "Install the plumbing",
          description: "An impossible goal",
          completed: false
        }
      ]);
    });
};
