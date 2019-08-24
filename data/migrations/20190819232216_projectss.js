exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.text("description");
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("actions", tbl => {
        tbl.increments();
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.string("description").notNullable();
        tbl.text("notes");
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.text("description");
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("resources")
      .dropTableIfExists("actions")
      .dropTableIfExists("projects");
  };