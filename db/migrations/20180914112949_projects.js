exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments("project_id");
    tbl
      .string("project_name", 128)
      .notNullable()
      .unique("uq_name");
    tbl
      .string("project_description", 128)
      .notNullable()
      .unique("uq_description");
    tbl
      .boolean("project_completed")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
