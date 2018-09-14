exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();

    tbl.string('description', 128).notNullable();

    tbl.string('notes', 128).notNullable();

    tbl.bool('completed').notNullable();

    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
