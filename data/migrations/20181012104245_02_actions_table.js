
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();

    tbl.string('description').notNullable();

    tbl.string('notes');

    tbl.boolean('completed');

    tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
