exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl.string("description").notNullable();

    tbl.string("notes").notNullable();

    tbl.boolean("complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
