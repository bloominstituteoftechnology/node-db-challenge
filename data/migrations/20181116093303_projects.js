exports.up = knex =>
  knex.schema.createTable("projects", projects => {
    projects.increments();

    projects.string("name", 255).notNullable();
    projects.text("description").notNullable();
    projects.boolean("completed").defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists("projects");
