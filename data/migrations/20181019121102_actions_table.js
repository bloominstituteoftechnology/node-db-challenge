exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();
    tbl.string('description', 50).notNullable();
    tbl.string('notes', 30).notNullable();

    tbl.boolean('completed').defaultTo(0);

    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('project');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};