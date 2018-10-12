
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    // id
    tbl.increments();

    // description (text, required)
    tbl.string('description', 550).notNullable();

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
  return knex.schema.dropIfTableExists('actions');
};
