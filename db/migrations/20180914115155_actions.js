exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("description", 128).notNullable();
    tbl.string("notes", 1000).notNullable();
    tbl
      .string("completed", 128)
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
