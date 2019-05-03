exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.string("description", 1000).notNullable();

    tbl.string("notes", 1000).notNullable();

    tbl.boolean("completed").defaultTo(false); 

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("actions");
};
