exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    // .increments() generates a primary key and makes it autoincrement
    tbl.increments();
    tbl
      .string("description", 80)
      .notNullable()
      .unique("description");
    tbl.string("notes", 120).notNullable();
    tbl.integer("Project_ID").notNullable();
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
