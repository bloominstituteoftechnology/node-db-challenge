
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
      table.increments();
      table.string("description", 280).notNullable();
      table.string("notes", 280).notNullable();
      table.boolean("completed").defaultTo(false);
      table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
