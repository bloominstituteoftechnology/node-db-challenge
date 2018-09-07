
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
    tbl.increments();

    tbl
      .string('context', 255)
      .notNullable()
      .unique('uq_context_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
