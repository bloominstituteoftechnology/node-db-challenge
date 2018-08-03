exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(table) {
    // pk
    table.increments();
    // other fields
    table.string("name", 256).notNullable();
    table
      .string("description", 256)
      .notNullable()
      .defaultTo("NOT PROVIDED");
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  // drop projects table
  return knex.schema.dropTableIfExists("projects");
};
