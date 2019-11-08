exports.seed = function(knex) {
  return knex("contexts").insert([
    { context: "at shrine" },
    { context: "at work" },
    { context: "at home" },
    { context: "online" }
  ]);
};
