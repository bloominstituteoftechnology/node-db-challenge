
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('description', 500);
      tbl.string('notes', 500);

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
