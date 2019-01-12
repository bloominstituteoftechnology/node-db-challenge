exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table.string("act_descr").notNullable();
    table.string("act_notes", 2000);
    table.boolean("act_complete");
    table.integer("proj_id").notNullable();
    table
      .foreign("proj_id")
      .references("id")
      .on("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
