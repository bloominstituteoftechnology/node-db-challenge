exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", function(tbl) {
    tbl.increments();
    tbl.string("from").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
