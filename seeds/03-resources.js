exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource: "copy machine",
      resourceDescription: "copies paper work and buttcheeks"
    },
    {
      resource: "ink cartridge",
      resourceDescription: "to be swapped with spent ink cartridge"
    },
    { resource: "paper", resourceDescription: "used to fill copy machine" },
    { resource: "broom", resourceDescription: "used to sweep things" },
    {
      resource: "windex",
      resourceDescription: "used to clean mirrors and frighten cats"
    },
    {
      resource: "bleach spray",
      resourceDescription: "used to clean toilets and ruin cloths"
    },
    {
      resource: "toilet brush",
      resourceDescription: "used to scrub dirty toilets"
    }
  ]);
};
