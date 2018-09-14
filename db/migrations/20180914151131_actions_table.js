
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {

    tbl.increments();

    tbl
      .string('description', 120)
      .notNullable();

    tbl
      .string('notes')
      .defaultTo('No notes');

    tbl
      .integer('project_id')
      .notNullable();

    tbl
      .boolean('completed')
      .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
