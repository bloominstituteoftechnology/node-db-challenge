exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();
      tbl.string("description", 255);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .string("resource_name", 255)
        .notNullable()
        .unique();
      tbl.string("description", 255);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
