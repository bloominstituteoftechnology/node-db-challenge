exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();
    tbl
      .string("description", 128)
      .notNullable()
      .unique("uq_descrip");
    tbl
      .string("notes", 128)
      .notNullable();
    tbl
      .string("completed")
      .boolean();
    tbl
      .integer("projects_id")
      .unsigned()
      .notNullable()
      .reference("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
