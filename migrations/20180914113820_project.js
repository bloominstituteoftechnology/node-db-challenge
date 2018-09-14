exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    // .increments() generates a primary key and makes it autoincrement
    tbl.increments();
    tbl
      .string("name", 80)
      .notNullable()
      .unique("name");
    tbl.string("description", 120).notNullable();
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
