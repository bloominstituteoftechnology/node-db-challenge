
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('project_description', 500)
      tbl.boolean('project_completed', false)
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.integer('resource_number')
        .unsigned()
        .notNullable();
      tbl.text('resource_name')
        .notNullable();
      tbl.text('resource_description', 500)
    })
    .createTable('task', tbl => {
      tbl.increments();
      tbl.text('task_description', 800).notNullable();
      tbl.text('task_notes', 500);
      tbl.boolean('task_completed', false)
    })
};

exports.down = function(knex) {
  return knex.schema
};
