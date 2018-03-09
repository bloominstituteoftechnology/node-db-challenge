exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", tbl => {
    tbl.increments("id");

    tbl
      .integer("project_id")
      .unsigned()
      .references("project_id")
      .inTable("projects")
      .onDelete("CASCADE");

    tbl
      .integer("action_id")
      .unsigned()
      .references("action_id")
      .inTable("actions")
      .onDelete("CASCADE");

    tbl.string("context").notNullable();

    tbl.timestamp("context_added").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("context");
};
