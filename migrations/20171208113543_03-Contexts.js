
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Contexts', tbl => {
    tbl.increments('id'); // primary key
    tbl.string('context', 64).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Contexts');
};
