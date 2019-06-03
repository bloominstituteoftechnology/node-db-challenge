exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    //primary key called id, integer, auto-increment
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();

    tbl.text("description");
    tbl.text("notes");

    tbl
      .integer("projects_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl.boolean("completed");

    //2 timestamp fields added to each row
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
