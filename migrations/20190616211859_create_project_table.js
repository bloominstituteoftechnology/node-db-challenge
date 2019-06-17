
exports.up = function(knex, Promise) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();
    tbl
        .string("name", 128)
        .notNullable()
        .unique();
    tbl
        .string("description", 128)
        .notNullable();
    tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("project");
};
