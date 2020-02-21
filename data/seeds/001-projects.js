exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Project 1", description: "project 1 seed", completed: false },
    { name: "Project2", description: "project 2 seed", completed: true }
  ]);
};
