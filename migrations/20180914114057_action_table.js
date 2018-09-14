
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    tbl.increments();
    tbl.string('Task');
    tbl.string('Notes');
    tbl.boolean('Completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
