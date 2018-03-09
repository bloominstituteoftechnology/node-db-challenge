exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", table => {
    table.integer("id").primary();

    table.string("context").notNullable();

    table.timestamp("createdAt").default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
