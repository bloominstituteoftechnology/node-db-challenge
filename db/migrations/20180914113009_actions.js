exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments("action_id");
    tbl
      .string("action_description", 128)
      .notNullable()
      .unique("uq_action_description");
    tbl
      .string("action_notes", 128)
      .notNullable()
      .unique("uq_action_notes");
    tbl
      .string("action_completed")
      .notNullable();
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .reference("project_id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
