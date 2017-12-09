
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'contexts', (tbl) => {
    tbl.increments('context_id');
    tbl.string('context', 50)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
