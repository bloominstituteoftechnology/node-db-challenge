
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments().notNullable();
      tbl.text('name', 100).notNullable();
      tbl.boolean('completed');
  })
  .createTable('resources', tbl => {
    tbl.increments().notNullable();
    tbl.text('name', 100).notNullable().unique();
    tbl.text('description', 128);
  })
  .createTable('tasks', tbl => {
    tbl.increments().notNullable();
    tbl.text('description', 100).notNullable();
    tbl.text('notes', 100);
    tbl.boolean('completed')
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
  })
  .createTable('project_resources', tbl => {
    tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
    tbl.integer('resource_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('resources')
    tbl.primary(['project_id', 'resource_id']);
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
