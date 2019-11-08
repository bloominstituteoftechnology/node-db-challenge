exports.seed = function(knex) {
  return knex("resources").insert([
    { resource_name: "Man", description: "a dev" },
    { resource_name: "PC", description: "a PC" },
    { resource_name: "Food", description: "pizza" },
    { resource_name: "Moneyyyy", description: "to spendddddd" }
  ]);
};
