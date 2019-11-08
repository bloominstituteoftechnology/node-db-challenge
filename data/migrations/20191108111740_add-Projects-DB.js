
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', function (table) {
      table.increments();
      table.string('name', 128).notNullable();
      table.string('description', 255);
      table.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('resources', function (table) {
      table.increments();
      table.string('name', 128).notNullable();
      table.string('description', 255);
  })
  .createTable('tasks', function (table) {
      table.increments();
      table.integer('project_id')
        .unsigned()  
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.string('description', 255).notNullable();
      table.string('notes', 400);
      table.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('projects-resources', function (table) {
      table.increments();
      table.integer('project_id')
        .unsigned()  
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.integer('resource_id')
        .unsigned()  
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects-resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects');
};
