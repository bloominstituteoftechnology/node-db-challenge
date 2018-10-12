exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();
    tbl.string("description", 128).notNullable();
    tbl.unique("description");
    tbl.string("notes", 128).notNullable();
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
