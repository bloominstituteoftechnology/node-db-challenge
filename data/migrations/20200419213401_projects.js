exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("projectName")
          .notNullable()
          .index();
        tbl
          .string("projectDescription")
          .notNullable()
          .index();
        tbl.boolean("Completed").defaultTo(false);
      })
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl
          .string("taskDescription")
          .notNullable()
          .index();
        tbl
          .string("taskNotes")
          .notNullable()
          .index();
        tbl.boolean("Completed").defaultTo(false);
        tbl
          .integer("projectId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
  
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("resourceName")
          .notNullable()
          .index();
        tbl
          .string("resourceDescription")
          .notNullable()
          .index();
      })
      .createTable("project_resource", tbl => {
        tbl.increments();
        tbl
          .integer("projectId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resourceId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("project_resource")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
  };
