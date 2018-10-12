
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments();
      tbl.string('description', 256).notNullable();
      tbl.string('notes', 256);
      tbl.boolean('completed').defaultTo('false');

      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
