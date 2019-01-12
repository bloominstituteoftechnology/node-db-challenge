exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments("action_id");
    table.string("description", 255).notNullable();
    table.string("notes", 255);
    table.boolean("complete").defaultTo(false);
    table.integer("project_id").unsigned();
    table
      .foreign("project_id")
      .references("id")
      .on("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
