
exports.up = function(knex, Promise) {
  return knex.schema.createTable('junction', tbl => {
      tbl.increments();
      tbl.integer('actions_id')
        .unsigned()
        .references('id')
        .inTable('actions');
        tbl.integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('junction');
};
