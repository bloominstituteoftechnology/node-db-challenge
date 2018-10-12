exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", t => {
    t.increments();
    t.string("description", 255)
      .notNullable()
    t.string("notes", 255)
      .notNullable()
      .unique("notes");
    t.boolean("completed")
      .defaultTo(false)
      .notNullable();
    t.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
