exports.up = knex =>
  knex.schema.createTable("actions", actions => {
    actions.increments();

    actions
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");

    actions.string("description", 255).notNullable();
    actions.text("notes").notNullable();
    actions.boolean("completed").defaultTo(false);
  });

exports.down = function(knex, Promise) {};
