
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', tbl => {
    tbl
        .increments();
    tbl
        .string('description')
        .notNullable();
    tbl
        .string('notes')
        .notNullable();
    tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false);
    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('action')
};
