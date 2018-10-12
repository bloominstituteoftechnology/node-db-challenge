exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();

    tbl.string('description', 128).notNullable();

    tbl.string('notes', 255);

    tbl.boolean('completed').defaultTo(false);

    tbl.integer('project_id').unsigned();

    tbl.foreign('project_id').references('projects.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
