
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();
    tbl.string('Task');
    tbl.string('Notes');
    tbl.boolean('Completed');

    tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
