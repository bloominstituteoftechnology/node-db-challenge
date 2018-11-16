exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", actions => {
    actions.increments();
    actions.string("name", 255).notNullable();
    actions.string("description", 500).notNullable();
    actions.string("note", 500);
    actions.boolean("completed");
    actions
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
