exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table.string("name");
    table.unique("name");
    table.string("description");
    table.string("notes");
    table.boolean("completed");
    table
      .integer("project_id")
      .unsigned()
      .references("project.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
