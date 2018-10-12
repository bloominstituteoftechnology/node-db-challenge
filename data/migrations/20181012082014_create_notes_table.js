
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', function(tbl) {
    // id
    tbl.increments();

    // note (text, required, unique)
    tbl.string('note', 200).notNullable();

    tbl.unique('note');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes');
};
