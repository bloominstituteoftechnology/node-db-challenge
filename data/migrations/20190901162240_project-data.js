
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments().notNullable();
      tbl.text('name', 100).notNullable();
      tbl.boolean('completed');
  })
  .createTable('resources', tbl => {
    tbl.increments().notNullable();
    tbl.text('name', 100).notNullable().unique();
    tbl.text('description', 128).notNullable();
  })
  .createTable('tasks', tbl => {
    tbl.increments().notNullable();
    tbl.text('description', 100).notNullable();
    tbl.text('notes', 100);
    tbl.boolean('completed').notNullable();
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
