
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', tbl => {
    tbl.increments();

    tbl
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions');

    tbl.string('name', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
