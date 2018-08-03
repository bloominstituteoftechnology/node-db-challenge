
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.increments();

    tbl.string('name', 255)
    .notNullable()
    .unique();

    tbl.string('description');

    tbl.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  
};
