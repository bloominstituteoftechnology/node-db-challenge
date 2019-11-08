exports.up = function(knex) {
  return (
    knex.schema
      //projects table
      .createTable("projects", tbl => {
        tbl.increments();

        tbl.string("name", 255).notNullable();
        tbl.string("project_description", 255);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
      })

      //tasks table
      .createTable("tasks", tbl => {
        tbl.increments();

        tbl.string("task_description", 255).notNullable();
        tbl.string("task_notes", 255);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      //resources table
      .createTable("resources", tbl => {
        tbl.increments();

        tbl
          .string("resource_name", 255)
          .notNullable()
          .unique();
        tbl.string("resource_description", 255);
      })

      //projects resources table
      .createTable("projects_resources", tbl => {
        tbl.increments();

        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
