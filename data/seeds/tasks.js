
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: "Buy giant chocolate cake from Costco" },
        {id: 2, project_id: 2, description: "Buy plot of land"},
        {id: 3, project_id: 3, description: "Buy a boat"},
        {id: 4, project_id: 1, description: "Find a fork" },
        {id: 5, project_id: 1, description: "Start shoveling!" },
        {id: 6, project_id: 2, description: "Dig a hole" },
        {id: 7, project_id: 2, description: "Start mixing concrete" },
        {id: 8, project_id: 2, description: "Maybe... take a break" },
        {id: 9, project_id: 3, description: "Plot a route" },
        {id: 10, project_id: 3, description: "Make fake whale to lure whalers into a trap" }
      ]);
    });
};
