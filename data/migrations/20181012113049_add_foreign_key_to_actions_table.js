exports.up = function(knex, Promise) {
  return knex.schema.table("actions", function(tbl) {
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
