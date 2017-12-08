
exports.up = function(knex, Promise) {
    return knex.schema.createTable('context', function(tbl) {
    tbl.increments('id');
    tbl.string('context', 24).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};
