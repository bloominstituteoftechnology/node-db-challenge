exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments("id").primary();

    table.string("description").notNullable();

    table.text("notes").notNullable();

    table.boolean("isComplete").default(false);

    table
      .integer("projectId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE");

    table.timestamp("createdAt").default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
