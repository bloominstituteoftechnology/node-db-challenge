
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl){
    tbl.integer('id').notNullable();
    tbl.string('context').notNullable();
  });
};

exports.down = function(knex, Promise) {
  // knex.schema.dropTableIfExists('contexts');
};
