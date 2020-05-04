exports.up = async function (knex) {
  await knex.schema.createTable("Projects", (table) => {
    table.increments("id");
    table.text("Name").notNull();
    table.text("Description", 128);
    table.boolean("Completed").notNull().defaultTo(false);
  });

  await knex.schema.createTable("Tasks", (table) => {
    table.increments("id");
    table.text("Description").notNull();
    table.text("Notes");
    table.integer("Project_ID").references("id").inTable("Projects");
    table.boolean("Completed").notNull().defaultTo(false);
  });

  await knex.schema.createTable("Resources", (table) => {
    table.increments("id");
    table.text("Name").notNull();
    table.text("Description");
    table.integer("Project_ID").references("id").inTable("Projects");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("Resources");
  await knex.schema.dropTableIfExists("Tasks");
  await knex.schema.dropTableIfExists("Projects");
};
