exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Resource 1", description: "computer", project_id: 1 },
    { name: "Resource 2", description: "conference room", project_id: 2 }
  ]);
};
