exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', tbl => {
    tbl.increments('id'); // primary key
    tbl.string('name', 128).notNullable();
    tbl.string('description', 1024).notNullable();
    tbl.bool('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Projects');
};
