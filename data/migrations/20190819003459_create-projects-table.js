exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .notNullable()
        .unique();
      tbl.text("description");
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .references("projects.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("name", 128)
        .notNullable()
        .unique();
      tbl.text("description");
    })
    .createTable("projects_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resourses.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
