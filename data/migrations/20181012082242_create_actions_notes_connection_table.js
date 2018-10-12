
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions-to-notes-connection', function(tbl) {
    // id
    tbl.increments();

    // reference to the action_id
    tbl
      .integer('action_id')
      .unsigned()
      .references('id')
      .inTable('actions');

    // reference to the note_id
    tbl
      .integer('note_id')
      .unsigned()
      .references('id')
      .inTable('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions-to-notes-connection');
};
