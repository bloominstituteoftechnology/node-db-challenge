exports.seed = function (knex) {
  return knex("Resources").insert([
    {
      name: "brake cleaner",
      description: "used to clean packing grease off rotors",
      project_id: 2,
    },
    {
      name: "hydraulic jack",
      description: "lifts car off the ground",
      project_id: 1,
    },
    {
      name: "C-clamp",
      description: "depress caliper piston",
      project_id: 1,
    },
  ]);
};
