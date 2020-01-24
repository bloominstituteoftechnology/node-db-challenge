exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.text("description");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.text("description").notNullable();
      tbl.text("notes");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("project_details", tbl => {
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
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.text("description");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("project_details")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
