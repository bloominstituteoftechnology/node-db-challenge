
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    // primary key
    tbl.increments();

    // other fields
    tbl.string('name', 128);
    tbl.string('description');
    tbl.boolean('completed');

    // timestamps
    tbl.timestamps(true, true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
