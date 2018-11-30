exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string("decription");
    tbl.string("notes");
    tbl.boolean("completed").defaultTo(0);
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
