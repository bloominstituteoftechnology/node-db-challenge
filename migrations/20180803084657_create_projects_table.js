exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', function(table) {
      table
        .increments();
      table
        .string('name')
        .notNullable();
      table
        .string('description')
        .notNullable();
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