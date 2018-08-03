exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('actions', function(table) {
      table
        .increments();
      table
        .text('description')
        .notNullable();
      table
        .text('notes');
      table
        .integer('iscomplete')
        .unsigned()
        .notNullable();
      table
        .integer('projectId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects');
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
    }).catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};