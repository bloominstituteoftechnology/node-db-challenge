
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('description');
      table.boolean('completed').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('actions', function(table) {
    table.increments();
    table.string('description').notNullable();
    table.string('notes');
    table.integer('projectId').references('id').inTable('projects');
    table.boolean('completed').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
})
.createTable('contexts', function(table) {
    table.increments();
    table.string('context').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
})
.createTable('projectcompiler', function(table) {
    table.increments();
    table.integer('projectId').references('id').inTable('projects');
    table.integer('actionId').references('id').inTable('actions');
    table.integer('contextId').references('id').inTable('contexts');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
  .dropTable('actions')
  .dropTable('contexts')
  .dropTable('projectcompiler')
};
