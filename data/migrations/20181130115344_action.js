exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', function(tbl) {
    tbl.increments();
    tbl.string('description', 255);
    tbl.string('notes', 255);
    tbl.boolean('completed');

    tbl.integer('project_id')
    .unsigned()
    .references('id')
    .inTable('project')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action')
}