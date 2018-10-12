exports.up = function(knex, Promise) {
  return knex.schema.createTable("action_contexts", function(table) {
    table.increments();
    table
      .integer("action_id")
      .unsigned()
      .notNullable()
      .references("actions.id");
    table
      .integer("context_id")
      .unsigned()
      .notNullable()
      .references("contexts.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("action_contexts");
};
