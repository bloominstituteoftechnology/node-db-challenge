exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', function(table) {
      table
        .increments();
      table
        .text('name')
        .notNullable();
      table
        .text('description');
      table
        .integer('iscomplete')
        .unsigned()
        .notNullable();
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now());
    }).catch(error => {
      console.log(error);
      reject(error);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};