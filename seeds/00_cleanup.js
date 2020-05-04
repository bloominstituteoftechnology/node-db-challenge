exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Resources").truncate();
  await knex("Tasks").truncate();
  await knex("Projects").truncate();
};
