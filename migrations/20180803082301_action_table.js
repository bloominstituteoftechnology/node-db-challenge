exports.up = function(knex, Promise) {
  return knex.schema.createTable("action", function(tbl) {
    tbl.increments();

    tbl
      .string("description")
      .notNullable()
      .unique();

    tbl
      .string("notes")
      .notNullable()
      .unique();

    tbl.boolean("complete").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("action");
};
