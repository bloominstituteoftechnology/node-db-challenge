exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "House",
          description: "Project for building a house",
          completed: false
        },
        {
          id: 2,
          name: "Life",
          description: "Project to build yourself",
          completed: false
        },
        {
          id: 3,
          name: "PC",
          description: "Project to build a PC",
          completed: false
        }
      ]);
    });
};
