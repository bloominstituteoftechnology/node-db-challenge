
exports.up = function(knex) {
  return knex.schema
    .createTable('contexts', tbl => {
      tbl.increments();

      tbl
        .string('name', 64)
        .notNullable();
      
      tbl
        .string('description', 255);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('contexts');
};
