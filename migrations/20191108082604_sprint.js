
exports.up = function(knex) {
    return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('project_name')
        .unique()
        .notNullable();
      tbl.string('project_description')
      tbl.boolean('project_completed', false)
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.integer('resource_number')
        .unsigned()
        .notNullable();
      tbl.string('resource_name')
        .notNullable();
      tbl.string('resource_description')
    })
    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('task_description').notNullable();
      tbl.string('task_notes');
      tbl.boolean('task_completed', false)
    })
};

exports.down = function(knex) {
  return knex.schema
};
