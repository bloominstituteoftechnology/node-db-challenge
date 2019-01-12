exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", context => {
    context.increments();
    context.text("context", 255).notNullable();
    context.text("context_description", 255).notNullable();
    context.integer("actionId").unsigned();
    context.foreign("actionId").references("actions.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
