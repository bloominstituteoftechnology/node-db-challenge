exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 256)
      .notNullable()
      .unique();

    tbl
      .string("descirption")
      .notNullable()
      .unique();

    tbl.boolean("complete").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
