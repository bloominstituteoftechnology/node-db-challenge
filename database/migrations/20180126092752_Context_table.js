
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(table) {
    table.integer('id').notNullable();
    table.string('context').notNullable();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('contexts');
};
