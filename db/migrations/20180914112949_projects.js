exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique("name");
    tbl
      .string("description", 128)
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
  return knex.schema.dropTable("projects");
};
