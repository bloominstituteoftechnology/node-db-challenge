
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('description', 256);
      tbl.string('note', 256);
      tbl.boolean('completed', false);

      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');
    

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
