exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable();
      tbl.text("project_description");
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("resource_name", 128)
        .notNullable()
        .unique();
      tbl.text("resource_description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_description", 128).notNullable();
      tbl.text("task_notes");
      tbl.boolean("task_completed").defaultTo(false);
      tbl
        // Foreign Key that directs to the projects table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("project-resources", tbl => {
      tbl
        // Foreign Key that directs to the projects table
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        // Foreign Key that directs to the resources table
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
