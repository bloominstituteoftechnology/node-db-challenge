
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    // id
    tbl.increments();

    // description (text, required)
    tbl.string('description', 550).notNullable();

    tbl.string('note', 1000).notNullable();

    tbl.unique('note');

    // completed (boolean)
    tbl.boolean('completed').defaultTo(false);

    // reference to project_id
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
