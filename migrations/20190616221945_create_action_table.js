
exports.up = function(knex) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl
        .string("description", 128)
        .notNullable();
    tbl
        .string("notes", 128);
    tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("actions");
};
