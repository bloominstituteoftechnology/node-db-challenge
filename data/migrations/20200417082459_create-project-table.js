exports.up = function (knex) {
  return (
    knex.schema

      //projects table

      .createTable('projects', (tbl) => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.text('project_description');
        tbl.boolean('project_completed').defaultTo(false);
      })

      //resources table

      .createTable('resources', (tbl) => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable().unique();
        tbl.text('resource_description');
      })

      //tasks table

      .createTable('tasks', (tbl) => {
        tbl.increments();
        tbl.string('task_description', 128).notNullable();
        tbl.text('task_notes');
        tbl.boolean('task_completed').defaultTo(false);
        tbl

          .integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })

      //project resources table

      .createTable('project-resources', (tbl) => {
        tbl.primary(['project_id', 'resource_id']);
        tbl

          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
        tbl

          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
