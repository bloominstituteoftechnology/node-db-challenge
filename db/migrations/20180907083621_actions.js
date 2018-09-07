exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments("id");
    tbl.string("description");
    tbl.string("notes");
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("actions", function(tbl) {
    tbl.dropColumn("actions");
  });
};
