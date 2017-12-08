
exports.up = function(knex, Promise) {
  return knex.schema.createTable( 'actions', (tbl) => {
    tbl.increments('action_id');
    tbl.string('project_action', 128)
      .notNullable();
    tbl.string('description', 256);
    tbl.boolean('completed')
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
