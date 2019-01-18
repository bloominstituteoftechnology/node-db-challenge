
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    // primary key
    tbl.increments();

    // other fields
    tbl.string('description', 128);
    tbl.string('notes');
    tbl.boolean('completed');

    //foreign key
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');

    // timestamps
    tbl.timestamps(true, true);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
