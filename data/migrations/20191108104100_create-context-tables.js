exports.up = function(knex) {
  return knex.schema
    .createTable("contexts", table => {
      table.increments();
      table
        .string("context", 128)
        .notNullable()
        .unique();
    })
    .createTable("task-contexts", table => {
      table.increments();
      table
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tasks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("context_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("contexts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.unique(["task_id", "context_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("task-contexts")
    .dropTableIfExists("contexts");
};
