exports.seed = async function (knex) {
  await knex("Projects").insert([
    {
      name: "Change Oil",
      description: "Quick drain and refill of car engine oil",
      completed: "true",
    },
    {
      name: "Brake Job",
      description:
        "Replacement of brake pads and rotors for the front and rear",
      completed: "false",
    },
    {
      name: "Rotate Tires",
      description: "Rotation of all four tires",
      completed: "false",
    },
  ]);
};
