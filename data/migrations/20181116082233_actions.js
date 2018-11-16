
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments();
      tbl.string('description', 528);
      tbl.string('notes', 1028);
      tbl.boolean('Completion_Status');
      tbl.integer('ProjectID')
      tbl.foreign('ProjectID').references('id').inTable('projects')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
