exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", function(table) {
      table.increments();
      table
        .string("action_name")
        .notNullable()
        .unique("action_name");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };