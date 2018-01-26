
exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', function(tbl) {
    tbl.increments('id');
    tbl.string('context', 32).notNullable().unique('uq_context');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};
