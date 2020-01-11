
exports.seed = async function(knex) {
  await knex('project_tasks').truncate()
  await knex('project_resources').truncate()
  await knex('task').truncate()
  await knex('resources').truncate()
  await knex('projects').truncate()
}
