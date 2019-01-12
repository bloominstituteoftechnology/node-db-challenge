exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table
      .string("proj_name")
      .notNullable()
      .unique();
    table.string("proj_descr");
    table.boolean("proj_complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
