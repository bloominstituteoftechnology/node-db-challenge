
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
    tbl.increments('id');
    tbl.string('context', 255).notNullable().unique('context');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('contexts');
};
