exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments().unique();
    tbl.string("description").notNullable();
    tbl.string("notes").nullable();
    tbl.boolean("Completed").defaultTo(false);
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
