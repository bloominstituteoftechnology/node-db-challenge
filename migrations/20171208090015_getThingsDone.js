
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'projects', (tbl) => {
    tbl.increments('project_id');
    tbl.string('name', 50)
      .notNullable();
    tbl.string('description', 256);
    tbl.boolean('project_done')
      .defaultTo(false);
    tbl.integer('action_id')
      .references('action_id')
      .inTable('actions');
    tbl.integer('context_id')
      .references('context_id')
      .inTable('contexts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
