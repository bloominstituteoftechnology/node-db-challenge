
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
    tbl.increments('id');
    tbl.string('contexts').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
