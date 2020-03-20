exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl_col => {
      tbl_col
        .increments()

      tbl_col
        .varchar('name', 255)
        .notNullable()

      tbl_col
        .varchar('description', 510)

      tbl_col
        .boolean('completed')
        .defaultTo(false)
    })
    .createTable('resources', tbl_col => {
      tbl_col
        .increments()

      tbl_col
        .varchar('name', 255)
        .unique()
        .notNullable()

      tbl_col
        .varchar('description', 510)
    })
    .createTable('tasks', tbl_col => {
      tbl_col
        .increments()

      tbl_col
        .varchar('description', 510)
        .notNullable()

      tbl_col
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tbl_col
        .string('notes', 510)

    })
    .createTable('project_resources', tbl_col => {
      tbl_col
        .increments()

      tbl_col
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tbl_col
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};