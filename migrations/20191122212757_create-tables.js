exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name", 255).notNullable();
      tbl.string("project_description", 255);
      tbl
        .boolean("project_completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
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
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("task_description", 255).notNullable();
      tbl.string("notes", 255);
      tbl
        .boolean("task_completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("projects_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
