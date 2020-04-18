
exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments();
    tbl.string('project_name', 128).notNullable().unique();
    tbl.string('project_description', 528);
    tbl.boolean('completed').notNullable().defaultTo(false);
  })
    .createTable('tasks', (tbl) => {
      tbl.increments();
      tbl.string('task_name', 128).notNullable();
      tbl.string('notes', 500).notNullable();
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', (tbl) => {
      tbl.increments();
      tbl.string('resource_name', 128).notNullable().unique();
      tbl.string('resource_description', 128);
    })
    .createTable('project_task', (tbl) => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('tasks.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project-resources', (tbl) => {
      tbl.increments();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project-respurces')
    .dropTableIfExists('project_task')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
