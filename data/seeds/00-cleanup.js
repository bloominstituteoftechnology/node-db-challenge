
exports.seed = async (knex) => {
  await knex("project_resource").truncate()
  await knex("resource").truncate()
  await knex("task").truncate()
  await knex("project").truncate()
}