exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();

    tbl
      .string("name", 64)
      .notNullable()
      .unique();

    tbl.string("description", 1200);

    tbl
      .integer("action_id")
      .notNullable()
      .unsigned()
      .references("actions.id");

    tbl.bool("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
