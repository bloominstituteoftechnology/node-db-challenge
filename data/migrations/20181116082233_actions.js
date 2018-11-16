
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
      tbl.increments();
      tbl.string('description', 528);
      tbl.string('notes', 1028);
      tbl.boolean('Completion_Status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
