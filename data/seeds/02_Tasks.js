exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("Tasks").insert([
    {
      Description: "buy oil filter",
      Notes: "filter # 04152-YZZA1",
      Project_ID: 1,
      Completed: " true",
    },
    {
      Description: "buy brake pads",
      Project_ID: 2,
      Completed: "false",
    },
    {
      Description: "buy oil",
      Notes: "5qts 0W-20",
      Project_ID: 1,
      Completed: "true",
    },

    {
      Description: "Take car to dealer",
      Project_ID: 3,
      Completed: "false",
    },
  ]);
};
