exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table
      .string("name")
      .unique()
      .notNullable();
    table.string("description");
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
