
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
      tbl.increments();

      tbl.text('description');
      tbl.text('notes');
      tbl.boolean('complete');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
