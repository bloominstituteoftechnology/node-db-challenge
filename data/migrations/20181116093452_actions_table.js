
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl.string('description', 255).notNullable();
    tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable("projects");
    tbl.string('notes', 511);
    tbl.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
