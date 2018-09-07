exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments("id");
    tbl
      .string("name")
      .notNullable()
      .unique("project_name");
    tbl.string("description");
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("projects", function(tbl) {
    tbl.dropColumn("projects");
  });
};
