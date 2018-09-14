exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique("name");
    tbl.string("description", 128).notNullable();
    tbl.string("completed");
    tbl.boolean(true);
    tbl
      .integer("projects_id");
    tbl
      .unsigned()
      .notNullable()
      .reference("id");
    tbl
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
