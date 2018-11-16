exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(t) {
    t.increments();
    t.integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");
    t.string("description").notNullable();
    t.string("notes");
    t.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
